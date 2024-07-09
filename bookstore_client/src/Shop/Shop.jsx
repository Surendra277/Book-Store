import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "flowbite-react";
import { File_BASE_URL } from "../config";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const handleAdd = () =>{


  }

  useEffect(() => {
    fetch("http://localhost:3000/api/getbook")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-24lg:px24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      <div className="grid gap-12 my-12 mx-24 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id}>
            <img
              src={`${File_BASE_URL}${book.imageURL}`}
              alt=""
              className="h-48 w-25"
            />
            <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.title}</p>
              <p>{book.author}</p>
            </h5>
            <p className=" text-2xl  font-normal text-gray-700 dark:text-gray-400">
              <p>₹{book.price}</p>
              <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 my-1 py-0.5 text-white rounded-md mx-4'>Add to Cart</button>
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded">
              Shop Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
