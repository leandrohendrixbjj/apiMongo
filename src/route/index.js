import express from 'express';
import LivroRoute from './LivroRoute.js';
import AutorRoute from './AutorRoute.js';

const routes = (app) => {
    app.use(express.json());

    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"Welcome to apiMongoDB"});
    });
                 
    app.use('/api/livros', LivroRoute);
    app.use('/api/autores', AutorRoute);
}

export default routes;