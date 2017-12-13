import { database, firebaseAuth } from "../config/database";

export function create(data) {
    return database.ref('/sheets').set({
      name: data.name
    });
  }