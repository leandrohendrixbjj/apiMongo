import Autores from '../models/Autor.js';

class AutorController{

   static store = (req,res) => {
      const autores = new Autores(req.body);
      
      autores.save()
      .then((autor) => res.status(201).json(autor))
      .catch(err => res.status(500).json({message:`${err.message} - falha cadastro autor`}));
    }   
 
   static list = (req,res) => {
       Autores.find()
       .then(autores => res.json(autores))
       .catch(err => res.status(500).json({message:`${err.message} - falha busca autores`}));    
    }

   static show = (req,res) => {
      Autores.findById(req.params.id)
      .then(autor => res.json(autor))
      .catch(err => res.status(404).json({message:`autor não encontrado`}));
   }
 
   static update = (req,res) => {
          
      Autores.findByIdAndUpdate(req.params.id, {$set: req.body})
      .then( () => res.json({message:"autor atualizado"}))
      .catch(err => res.status(500).json({message:`${err.message} - falha atualização autor`}));
   }

   static delete = (req,res) => {     
     Autores.findByIdAndDelete(req.params.id)
     .then( () => res.status(204).end())
     .catch(err => res.status(500).json({message:`autor não existe`}));   
   }      
}

export default AutorController;