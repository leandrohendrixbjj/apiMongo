import livrosModel from '../models/Livro.js';

class LivroController{

   static store = (req,res) => {
      const livros = new livrosModel(req.body);
      
      livros.save()
      .then((livro) => res.status(201).json(livro))
      .catch(err => res.status(500).json({message:`${err.message} - falha cadastro livro`}));
    }   
 
   static list = (req,res) => {
      livrosModel.find((error,livros) => {
         res.json(livros)   
      }); 
   }

   static show = (req,res) => {
      livrosModel.findById(req.params.id)
      .then(livro => res.json(livro))
      .catch(err => res.status(500).json({message:`${err.message} - falha busca livro`}));
   }
 
   static update = (req,res) => {
          
      livrosModel.findByIdAndUpdate(req.params.id, {$set: req.body})
      .then( () => res.json({message:"Livro atualizado"}))
      .catch(err => res.status(500).json({message:`${err.message} - falha atualização livro`}));
   }
      
}

export default LivroController;