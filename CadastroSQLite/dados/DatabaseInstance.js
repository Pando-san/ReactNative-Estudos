import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('LojaDatabase.db');

export default db;