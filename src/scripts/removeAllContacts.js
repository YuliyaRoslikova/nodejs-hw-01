import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';

export const removeAllContacts = async () => {
  const dbPath = path.resolve(PATH_DB);
  try {
    await fs.writeFile(dbPath, JSON.stringify([]), 'utf-8');
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Failed to remove contacts:', error);
    throw error;
  }
};

await removeAllContacts();
