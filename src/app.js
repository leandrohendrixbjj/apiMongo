import express from "express";

const app = express();

app.use(express.json());

const motos = [
    {id:'1',nome:"Vstrom 660"},
    {id:'2',nome:"Honda CB 500x"}
];

app.get('/', (req,res) => {
    res.status(200).send('Welcome to nodeJs');
});

app.get('/motos', (req,res) => {
    res.status(200).json(motos)
});

app.post('/motos', (req,res) => {
    motos.push(req.body);
    res.status(201).end();
});

export default app;