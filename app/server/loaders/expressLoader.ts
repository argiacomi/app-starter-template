import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression'; // compresses requests
import path from 'path';
import bodyParser from 'body-parser';
import { srvPort, staticPath } from '../../common/constants';
import router from '../routes';

// import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Enable Helemt HTTP headers for security
app.use(helmet());

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

//Attempts to compress response bodies for all request
app.use(compression());

// JSONify the string of req.body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, staticPath)));

app.use(router);
// Load API routes

const expressLoader = app;
export default expressLoader;
