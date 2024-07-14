
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { File_BASE_URL } from "../config";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/bookbyid/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);


  localStorage.setItem('bookid', id)
  console.log(id);
  if (error) {
    return <div>{error}</div>;
  }
  if (!book) {
    return <div>Loading...</div>;
  }

  const handleCart = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/addtocart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          id: localStorage.getItem("id"),
          bookid: id
        },
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error. Please try again later.");
    }
  }

  // if (!book) {
  //   return <div>Loading...</div>;
  // }

  const handleFavourite = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/storefavbooks", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          id: localStorage.getItem("id"),
          Authorization: "Bearer " + localStorage.getItem("token"),
          bookid: id
        },

      })

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error. Please try again later.");
    }
  }

  return (
    <div className="container mx-auto mt-24 p-4 border shadow-lg border-x-gray-400">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white  rounded-lg p-6">
        <div>
        <img
          src={`${File_BASE_URL}${book.imageURL}`}
          alt={book.title}
          className="h-96 object-cover rounded-lg border border-black"
        />
        </div>
        {/* <div className="flex flex-col items-center">                
          <button onClick={handleCart} >< BsCart4  className="h-10 w-6"/></button>
          <button onClick={handleFavourite} > <CiHeart className="h-8 w-8"  /></button>
        </div> */}
        <div className="lg:ml-6 mt-6 px-10 lg:mt-0 lg:w-2/3 flex  flex-col ">
          <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
          <p className="text-xl mb-2"><span className="font-bold">Author:</span> {book.author}</p>
          <p className="text-xl mb-2"><span className="font-bold">Price:</span> ₹{book.price}</p>
          <p className="text-xl mt-3"><span className="font-bold">Description: </span>{book.description}</p>
          <div className="">
            {/* <button onClick={handleFavourite} className="bg-red-700 text-white py-2 px-4 rounded mt-4 ml-4" > Add to Favourites</button> */}
            <button onClick={handleCart} className="bg-blue-700 m-5 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;


{/* <div className="container mx-auto mt-20  p-4">
      <div className="flex flex-col justify-evenly lg:flex-row items-center lg:items-start  bg-white shadow-xl border  rounded-lg p-6">
        <img
          src={`${File_BASE_URL}${book.imageURL}`}
          alt={book.title}
          className="h-96 object-cover rounded-lg"
        />
        <div className="lg:ml-6 mt-6 lg:mt-0 lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
          <p className="text-xl mb-2"><span className="font-bold">Author:</span> {book.author}</p>
          <p className="text-xl mb-2"><span className="font-bold">Price:</span> ₹{book.price}</p>
          <p className="text-md mt-4">{book.description}</p>
          <button className="bg-blue-700 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
          
        </div>
      </div>
    </div> */}
