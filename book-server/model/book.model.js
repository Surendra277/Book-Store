import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: String,
    },
    categories: [
      {
        type: String,
        enum: ["Best Selling","Mystery", "Fiction", "Non-Fiction", "History","Thriller"],
        required: true,
      },
    ],
    language:{
        type: String,
        required:true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;