// src/features/favorite/favoriteBook.schema.js

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const favoriteBookSchema = new Schema({
    name:String,
    price:Number,
    author:String,
    image:String,
});

const BestBook = mongoose.model('FavoriteBook', favoriteBookSchema);
export default BestBook;