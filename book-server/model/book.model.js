import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
}, { timestamps: true });

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
    stock: {
      type: Number,
      default: 0,
    },
    reviews: [reviewSchema],
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;