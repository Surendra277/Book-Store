// src/components/SingleBook.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { File_BASE_URL } from "../config";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/bookbyid/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

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

 const handleFavourite =async ()=>{
  try {
    const response = await fetch("http://localhost:3000/api/storefavbooks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        id:localStorage.getItem("id"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        bookid:id
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
    <div className="container mx-auto mt-12 p-4">
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
          <button onClick={handleFavourite} className="bg-red-700 text-white py-2 px-4 rounded mt-4 ml-4" > Add to Favourites</button>
          <button onClick={handleCart} className="bg-blue-700 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { File_BASE_URL } from "../config";

// const SingleBook = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState({});
//   const [error, setError] = useState(null);
//   const [userId, setUserId] = useState(null); // Assuming userId is stored in state

//   useEffect(() => {
//     // Example to retrieve userId from localStorage
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUserId(parsedUser.userId); // Adjust this based on how userId is stored
//     }
    
//     fetch(`http://localhost:3000/api/bookbyid/${id}`)
//       .then((res) => res.json())
//       .then((data) => setBook(data))
//       .catch((error) => {
//         console.error("Error fetching book:", error);
//         setError("Error fetching book. Please try again later.");
//       });
//   }, [id]);

//   const handleCart = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/api/addtocart", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId: userId, bookId: id }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Book added to cart successfully:", data);
//         // Optionally: Update UI or show success message
//       } else {
//         // Handle non-success response (like 401 Unauthorized)
//         const errorMessage = await response.text(); // Get error message text
//         console.error("Error adding book to cart:", errorMessage);
//         setError("Unauthorized access. Please log in.");
//         // Optionally: Update UI to show error message
//       }
//     } catch (error) {
//       console.error("Network error adding book to cart:", error);
//       setError("Network error. Please try again later.");
//       // Handle network error scenario
//     }
//   };

//   if (!book) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto mt-10 p-4">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-lg rounded-lg p-6">
//         <img
//           src={`${File_BASE_URL}${book.imageURL}`}
//           alt={book.title}
//           className="h-35 w-20 object-cover rounded-lg"
//         />
//         <div className="lg:ml-6 mt-6 lg:mt-0 lg:w-2/3">
//           <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
//           <p className="text-xl mb-2"><span className="font-bold">Author:</span> {book.author}</p>
//           <p className="text-xl mb-2"><span className="font-bold">Price:</span> ₹{book.price}</p>
//           <p className="text-md mt-4">{book.description}</p>
//           <button onClick={handleCart} className="bg-blue-700 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
//           {error && <p className="text-red-500">{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleBook;
