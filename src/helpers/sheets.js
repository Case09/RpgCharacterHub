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