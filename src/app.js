import express from "express";
import route from './route.js';
import db from './config/connection.js';

db.on("error", console.log.bind(console,'Error on database connection'));
db.once("open", () => {
    console.log('Connection was made successfully');
});


const app = express();
app.use(express.json());
app.use('/api/livros', route);

export default app;