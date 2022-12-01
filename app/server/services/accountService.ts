import getAllAccounts from '../db/accountSettings';

let accountService;

export default accountService = {
  getAllAccounts: () => {
    const accounts = getAllAccounts;
    return accounts;
  },

  getOneAccount: () => {
    console.log('Got 1 Account!');
    return;
  },

  createNewAccount: () => {
    return;
  },

  updateOneAccount: () => {
    return;
  },

  deleteOneAccount: () => {
    return;
  },
};
