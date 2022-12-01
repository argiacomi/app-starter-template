import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

export const isProd = process.env.NODE_ENV === 'production';
export const srvPort = process.env.SRV_PORT || 3000;
export const staticPath = process.env.STATIC_PATH || '/public';
