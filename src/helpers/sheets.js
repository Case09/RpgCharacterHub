import { database, firebaseAuth } from "../config/database";

export function create(data) {
    const sheets =  database.ref('/sheets').push();
    return sheets.set({
      user: data.email,
      name: data.name
    });
  }