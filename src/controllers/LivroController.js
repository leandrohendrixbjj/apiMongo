import livrosModel from '../models/Livro.js';

class LivroController{

   static store = (req,res) => {
      const livros = new livrosModel(req.body);
      
      livros.save()
      .then((livro) => res.status(201).json(livro))
      .catch(err => res.status(500).json({message:`${err.message} - falha cadastro livro`}));
    }   
 
   static list = (req,res) => {
       livrosModel.find()
        .populate('autor')        
        .then(livros => res.json(livros))
        .catch(err => res.status(500).json({message:`${err.message} - falha busca livros`}));    
    }

   static show = (req,res) => {
      livrosModel.findById(req.params.id)
      .populate('autor', 'nome')
      .then(livro => res.json(livro))
      .catch(err => res.status(404).json({message:`Livro não encontrado`}));
   }
 
   static update = (req,res) => {
          
      livrosModel.findByIdAndUpdate(req.params.id, {$set: req.body})
      .then( () => res.json({message:"Livro atualizado"}))
      .catch(err => res.status(500).json({message:`${err.message} - falha atualização livro`}));
   }

   static delete = (req,res) => {     
     livrosModel.findByIdAndDelete(req.params.id)
     .then( () => res.status(204).end())
     .catch(err => res.status(500).json({message:`Livro não existe`}));   
   }      
}

export default LivroController;