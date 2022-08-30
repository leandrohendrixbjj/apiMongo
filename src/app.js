import db from '../src/config/connect.js';
import express from "express";
import routes from './route/index.js';

const app = express();
routes(app);

export default app;