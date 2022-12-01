import express from 'express';
import mainPage from './routes/mainPage';
import accountSettings from './routes/accountRoutes';

const router = express.Router();

router.use('/', mainPage);
router.use('/landing', mainPage);
//router.use('/account-settings', accountSettings);

export default router;
