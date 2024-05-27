import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';

export const writeContacts = async (contacts) => {
  await fs.writeFile(
    path.resolve(PATH_DB),
    JSON.stringify(contacts, null, 2),
    'utf-8',
  );
};
