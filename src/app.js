import express from "express";
import route from './route.js';

const app = express();

app.use(express.json());
app.use('/api/livros', route);

export default app;