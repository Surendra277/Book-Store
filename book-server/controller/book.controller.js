import Book from "../model/book.model.js";

const bookController={
  
      async storeBook(req,res){
        try {
            const{name,price,category,image,title}=req.body;
            const book = await Book.create({name,price,category,image,title}); 
            return res.status(201).json(book);
            } catch (error) {
                return res.status(400).json({error: error.message});
                }
      },

    async getBook(req,res){
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
}

export default bookController;