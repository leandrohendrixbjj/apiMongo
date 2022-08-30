import livrosModel from '../models/Livro.js';

class LivroController{
   static list = (req,res) => {
      livrosModel.find((error,livros) => {
         res.json(livros)   
      }); 
   }

  
}

export default LivroController;