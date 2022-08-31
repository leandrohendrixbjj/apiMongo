import livrosModel from '../models/Livro.js';

class LivroController{

   static list = (req,res) => {
      livrosModel.find((error,livros) => {
         res.json(livros)   
      }); 
   }

   static store = (req,res) => {
     const livros = new livrosModel(req.body);
     
     livros.save()
     .then((livro) => res.status(201).json(livro))
     .catch(err => res.status(500).json({message:`${err.message} - falha cadastro livro`}))
   }   
}

export default LivroController;