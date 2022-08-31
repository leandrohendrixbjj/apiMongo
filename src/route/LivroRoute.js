import express from 'express';
const route = express.Router();
import LivroController from '../controllers/LivroController.js';

route
  .get('/', LivroController.list)   
  .post('/', LivroController.store)


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

// route.put('/:id', buscaLivro(livros), (req,res) => {   
//     try{
//       const indexLivro = res.buscaLivro;

//       if (indexLivro == -1)
//          throw Error;

//       let livro = livros[indexLivro];
//       livro.nome = req.body.nome;

//       res.json(livro).end();  
//     }catch(err){
//        res.status(400);
//        res.json({message:'Livro não encontrado'});
//     }
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

// function buscaLivro(livros){
//    return (req,res,next) => {
//       const livro = livros.findIndex(livro => livro.id == req.params.id);
//       res.buscaLivro = livro;
//       next();         
//    }
// }

export default route;