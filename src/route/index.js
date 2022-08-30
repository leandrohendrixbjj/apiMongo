import express from 'express';
import LivroRoute from './LivroRoute.js';

const routes = (app) => {
    app.use(express.json());

    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"Welcome to apiMongoDB"});
    });
                 
    app.use('/api/livros', LivroRoute);
}

export default routes;