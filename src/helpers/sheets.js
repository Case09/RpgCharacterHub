import { database, firebaseAuth } from "../config/database";

export function create(data, sheetsDataRef) {
	const sheetsRef = database.ref(`/sheets/${data.uid}`).push();

	// Writing to /sheets collection, which contains user sheets
	return sheetsRef.set({
		createdAt: Date.now(),
		isPublic: data.isPublic,
		sheetData: sheetsDataRef.key
	});
}

export function saveSheetData(data, sheetsDataRef) {
	// Writing sheet data into /sheetsData
	return sheetsDataRef.set({
		...data.sheetData
	});
}

export function savePublicSheet(data, sheetsDataRef) {
	const publicSheetsRef = database.ref(`/publicSheets`).push();
	// If public, writing to /publicSheets collection
	if (data.isPublic) {
		return publicSheetsRef.set({
			creator: data.uid,
			sheetData: sheetsDataRef.key
		});
	}
}

export function getLatestSheetsRef() {
  // Returning /sheets collection ref
  const currentUser = firebaseAuth().currentUser;
  const sheetsRef = database.ref(`/sheets/${currentUser.uid}`);
  return sheetsRef.once('value');
}

export function getLatestSheetIds(sheetsRef) {
  // Returning array of ids used to get sheetData
  let sheetData = [];
  sheetsRef.forEach(sheet => {
    sheetData.push(sheet.child("sheetData").val());
  });
  return sheetData;
}

export function getLatestSheetDataRef() {
  return database.ref(`/sheetsData`).once('value');
}

export function getLatestSheetData(ids) {
	let sheetsArray = [];
  ids.forEach(sheetId => {
    sheetsArray.push(sheetsDataRef.child(sheetId))
	})
	return sheetsArray;
}