import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';
import { readContacts } from '../utils/readContacts.js';

export const thanos = async () => {
  const dbPath = path.resolve(PATH_DB);
  try {
    const contacts = await readContacts();
    const filteredContacts = contacts.filter(() => Math.random() > 0.5);

    await fs.writeFile(
      dbPath,
      JSON.stringify(filteredContacts, null, 2),
      'utf-8',
    );
    console.log(`Contacts remaining after Thanos: ${filteredContacts.length}`);
  } catch (error) {
    console.error('Failed to execute Thanos:', error);
    throw error;
  }
};

await thanos();
