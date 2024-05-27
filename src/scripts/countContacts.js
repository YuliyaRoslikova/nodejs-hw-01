import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  return (await readContacts()).length;
};

console.log(await countContacts());
