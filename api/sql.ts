import { List } from "@/interfaces";
import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase;

export const initializeDatabase = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("todolist.db");
  }

  return db;
};

export const resetDatabase = async () => {
  await db.closeAsync();
  await SQLite.deleteDatabaseAsync("todolist.db");
};

export const createListTable = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, length INTEGER NOT NULL, emoji TEXT NOT NULL, type TEXT NOT NULL);
  `);
};

export const createItemsTable = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, list_id INTEGER NOT NULL, type TEXT NOT NULL, content TEXT NOT NULL, completed INTEGER DEFAULT 0, created INTEGER DEFAULT (strftime('%s', 'now')), FOREIGN KEY(list_id) REFERENCES lists(id));
  `);
};

export const createList = async (
  title: string,
  description: string,
  length: number,
  emoji: string,
  type: string
) => {
  return await db.runAsync(
    "INSERT INTO lists (title, description, length, emoji, type) VALUES (?, ?, ?, ?, ?)",
    title,
    description,
    length,
    emoji,
    type
  );
};

export const getList = async (id: number) => {
  return await db.getFirstAsync("SELECT * FROM lists WHERE id = ?", id);
};

export const getLists = async (): Promise<List[]> => {
  return await db.getAllAsync("SELECT * FROM lists");
};
