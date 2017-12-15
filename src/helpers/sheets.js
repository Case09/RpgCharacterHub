import { database, firebaseAuth } from "../config/database";

export function create(data) {
    const sheets =  database.ref('/sheets').push();
    // uid, isPublic, sheetData
    return sheets.set({
      ...data
    });
  }