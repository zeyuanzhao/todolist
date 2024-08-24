import { List } from "@/interfaces";
import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase;

export const initializeDatabase = async () => {
  // check if db is not initialized
  if (!db) {
    db = await SQLite.openDatabaseAsync("todolist.db");
  }

  return db;
};

export const createListTable = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, length INTEGER NOT NULL, emoji TEXT NOT NULL, type TEXT NOT NULL);
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
