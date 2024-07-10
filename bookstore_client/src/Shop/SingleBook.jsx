// src/components/SingleBook.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { File_BASE_URL } from "../config";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/bookbyid/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-lg rounded-lg p-6">
        <img
          src={`${File_BASE_URL}${book.imageURL}`}
          alt={book.title}
          className="h-35 w-20 object-cover rounded-lg"
        />
        <div className="lg:ml-6 mt-6 lg:mt-0 lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
          <p className="text-xl mb-2"><span className="font-bold">Author:</span> {book.author}</p>
          <p className="text-xl mb-2"><span className="font-bold">Price:</span> ₹{book.price}</p>
          <p className="text-md mt-4">{book.description}</p>
          <button className="bg-blue-700 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
          console.log("hii")
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
