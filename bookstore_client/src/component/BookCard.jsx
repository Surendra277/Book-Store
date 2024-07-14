import React, { useState } from 'react'
import { File_BASE_URL } from '../config'
import {Heart} from 'lucide-react'
import { Navigate, useNavigate } from "react-router-dom";

const handleFavourite = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/api/storefavbooks", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          id: localStorage.getItem("id"),
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

const BookCard = ({book}) => {
    const navigate = useNavigate();
    const [favourite, setFavourite] = useState(null)
    const handleNavigate = (id) => {
        navigate(`/book/${id}`);
      };
    return (
        <>
            <img
                src={`${File_BASE_URL}${book.imageURL}`}
                alt=""
                className="h-64 object-contain mb-4 rounded-lg"

            />
            <button onClick={() => {setFavourite(!favourite); handleFavourite(book._id)}}><Heart className={`absolute h-10 w-8 right-8 top-7 ${favourite && 'fill-red-600 text-red-600'}`} /></button>

            <div className="text-sm font-medium tracking-tight text-gray-900 dark:text-white">
                <p><span className="font-extrabold"> Title: </span>{book.title}</p>
                <p><span className="font-extrabold">Author: </span>{book.author}</p>
                <p><span className="font-extrabold">Price:</span> ₹{book.price}</p>
            </div>
            <button
                onClick={() => handleNavigate(book._id)}
                className="bg-blue-700 font-semibold text-white py-2 rounded mt-2 w-full"
            >
                Shop Now
            </button>
        </>
    )
}

export default BookCard