import express from 'express';

const accountSettings = express.Router();
import accountController from '../../controllers/accountController';

accountSettings.get('/', accountController.getAllAccounts);

accountSettings.get('/:accountId', accountController.getOneAccount);

accountSettings.post('/', accountController.createNewAccount);

accountSettings.patch('/:accountId', accountController.updateOneAccount);

accountSettings.delete('/:accountId', accountController.deleteOneAccount);

export default accountSettings;
