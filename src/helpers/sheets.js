import { database, firebaseAuth } from "../config/database";

export function create(creator, data) {
    const sheets =  database.ref('/sheets').push();
    return sheets.set({
      creator,
      data: {
        ...data
      }
    });
  }