import { json } from "express";
import upload from "../middleware/uploads.js";
import Book from "../model/book.model.js";
// import User from "../model/user.model.js";
const bookController = {
  async storeBook(req, res) {
    // upload(req, res, async (err) => {
    //   if (err) {
    //     return res.status(400).json({ message: err });
    //   }
    // const { id } = req.headers;

    // const user = await User.findById(id);
    //    console.log(user);

    // const role=localStorage.getItem("role");

    // if (role !== "admin")
    //   {
    
    //   return res
    //     .status(401)
    //     .json({ message: "You are not authorized to perform this action" });
    // }
    // console.log(req.body, "test");
    // return res.json({ status: 200, data: req.body, file: req.file.filename });
    const { title, author, description, price, categories, language } =
      req.body;

    const imageFile = req.file ? `/uploads/${req.file.filename}` : null;
    const newBook = new Book({
      title,
      author,
      description,
      price,
      categories,
      imageURL: imageFile,
      language,
    });
    try {
      const savedBook = await newBook.save();
      res.status(201).json(savedBook)
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
    // });
  },

  async getBookyById(req, res) {
    try {
      const { id } = req.params;
      const books = await Book.findById(id);
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getBook(req, res) {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async updateBook(req, res, next) {
    let book;
    try {
      const { bookid } = req.headers;
      const updateBookData = req.body;
      book = await Book.findByIdAndUpdate({ _id: id }, updateBookData);
    } catch (err) {
      res.status(404).json({ err: "Server Error", serverError: err });
    }
    res.status(201).json(book);
    next();
  },

  async deleteBook(req, res, next) {
    try {
      const { bookid } = req.headers;
      await Book.findByIdAndDelete(bookid);
      res.json({ message: "Book deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default bookController;
