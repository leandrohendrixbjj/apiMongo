import express from 'express';
const route = express.Router();
import AutorController from '../controllers/AutorController.js';

route
.post('/', AutorController.store)  
.get('/', AutorController.list)   
.get('/:id', AutorController.show)
.put('/:id', AutorController.update)
.delete('/:id', AutorController.delete)

export default route;