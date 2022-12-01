/*import { PrismaClient } from './../../../node_modules/.pnpm/@prisma+client@4.4.0_prisma@4.4.0/node_modules/@prisma/client';
const DB = require('./db_test.json');
const prisma = new PrismaClient();

async function getAllAccounts() {
  console.log(DB.workouts);
  return DB.workouts;
}

getAllAccounts()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    //process.exit(1);
  });

export default { getAllAccounts };
*/

import DB from './db_test.json';

const getAllAccounts = () => {
  return DB.workouts;
};

export default getAllAccounts;
