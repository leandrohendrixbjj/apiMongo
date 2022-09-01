import express from 'express';
const route = express.Router();
import LivroController from '../controllers/LivroController.js';

route
.post('/', LivroController.store)  
.get('/', LivroController.list)   
.get('/:id', LivroController.show)
.put('/:id', LivroController.update)
.delete('/:id', LivroController.delete)
  



// route.get('/:id', buscaLivro(livros), (req,res) => {
//    const livroIndex = res.buscaLivro;
//    try{
//       if (livroIndex == -1)
//         throw Error;

//       res.json(livros[livroIndex]).end();  
//    }catch(err){
//       res.status(404);
//       res.json({error:'Livro não encontrado'});
//    }
// });

// route.delete('/:id', buscaLivro(livros), (req,res) => {
//    try{
//       const indexLivro = res.buscaLivro;   
      
//       if (indexLivro == -1)
//         throw Error;

//       livros.splice(indexLivro,1);
//       res.status(204).end();
//     }catch(err){
//        res.status(400);
//        res.json({message:'Erro na exclusão do livro'});
//     }   
// });

export default route;