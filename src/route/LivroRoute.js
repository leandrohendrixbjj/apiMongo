import express from 'express';
const route = express.Router();
import LivroController from '../controllers/LivroController.js';

route
.post('/', LivroController.store)  
.get('/', LivroController.list)   
.get('/busca', LivroController.listForEditora)
.get('/:id', LivroController.show)
.put('/:id', LivroController.update)
.delete('/:id', LivroController.delete)


export default route;