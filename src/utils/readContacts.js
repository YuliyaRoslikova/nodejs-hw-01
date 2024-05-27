import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    } else {
      throw error;
    }
  }
};
