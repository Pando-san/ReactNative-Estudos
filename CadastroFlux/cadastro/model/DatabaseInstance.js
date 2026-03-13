import * as SQLite from 'expo-sqlite';

let db = null;

export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('Escola.db');
  }
  return db;
}