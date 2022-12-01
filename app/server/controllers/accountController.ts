import Express from 'express';
import accountService from '../services/accountService';

let accountController;

export default accountController = {
  getAllAccounts: (_req = Express.request, res = Express.response) => {
    const allAccounts = accountService.getAllAccounts();
    res.send({ status: 'OK', data: allAccounts });
  },

  getOneAccount: (_req = Express.request, res = Express.response) => {
    const account = accountService.getOneAccount();
    res.send('Get an existing Account');
  },

  createNewAccount: (_req = Express.request, res = Express.response) => {
    const createdAccount = accountService.createNewAccount();
    res.send('Create a new Account');
  },

  updateOneAccount: (_req = Express.request, res = Express.response) => {
    const updatedAccount = accountService.updateOneAccount();
    res.send('Update an existing Account');
  },

  deleteOneAccount: (_req = Express.request, res = Express.response) => {
    accountService.deleteOneAccount();
    res.send('Delete an existing Account');
  },
};
