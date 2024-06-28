import Book from "../model/book.model.js";

const bookController={
  
      async storeBook(req,res){
        const { title, author, description, price, imageURL, categories, stock } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            price,
            imageURL,
            categories,
            stock
        });
      
        try {
            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
      },

    async getBook(req,res){
      try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
},
async updateBook(req,res,next){
    let book;
    try{
      const{id}=req.params;
      const updateBookData= req.body;
      book= await Book.findByIdAndUpdate({_id:id},updateBookData);
     
    }
    catch(err){
       res.status(404).json({err:"Server Error",serverError:err})
    }
    res.status(201).json(book);  
  },
  
  async deleteBook(req,res,next){
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json({ message: 'Book deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
  },
 
}

export default bookController;