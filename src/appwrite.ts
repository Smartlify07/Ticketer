import { Account, Client } from 'appwrite';

const client = new Client();
client.setProject('679392c7002adf3f982d');
export const account = new Account(client);
