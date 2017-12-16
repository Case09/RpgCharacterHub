import { database, firebaseAuth } from "../config/database";

export function create(data) {
    const sheetsRef =  database.ref(`/sheets/${data.uid}`).push();
    const sheetsDataRef = database.ref(`/sheetsData`).push();
    const publicSheetsRef = database.ref(`/publicSheets`).push();
    // If public, writing to /publicSheets collection
    if (data.isPublic) {
      publicSheetsRef.set({
        creator: data.uid,
        sheetData: sheetsDataRef.key
      })
    }

    // Writing to /sheets collection, which contains user sheets
    sheetsRef.set({
      createdAt: Date.now(),
      isPublic: data.isPublic,
      sheetData: sheetsDataRef.key
    });

    // Writing sheet data into /sheetsData
    return sheetsDataRef.set({
      ...data.sheetData
    })
  }