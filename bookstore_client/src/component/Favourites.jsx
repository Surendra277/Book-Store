import React, { useEffect, useState } from "react";
import { File_BASE_URL } from "../config";
const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavourites = async () => 
      {
      try {
        const response = await fetch("http://localhost:3000/api/getfavbooks", {
          headers: {
            method:"GET",
            // "Content-Type": "application/json",
            id: localStorage.getItem("id"),
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch favourites");
        }
        const data = await response.json();
        // localStorage.setItem('id',data.id)
        setFavourites(data.favorites);
       

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, []);

  const removeFromFavourites = async (bookId) => {
    try {
      const response = await fetch("http://localhost:3000/api/removefavbooks", {
        method: "PUT",
        headers: {
          id: localStorage.getItem("id"),
          Authorization: "Bearer " + localStorage.getItem("token"),
          bookid: bookId
        },
            //  body: JSON.stringify({ bookId }),     
      });
      
      if (!response.ok) {
        throw new Error("Failed to remove book from favourites");
      }
      const data = await response.json();
      alert(data.message);
      // Update state to remove the book
      setFavourites((prevFavourites) =>
        prevFavourites.filter((book) => book._id !== bookId)
      );
    } catch (error) {
      setError(error.message);
    }

  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mx-auto max-w-6xl p-8 sm:p-12 mt-10">
      <h2 className="text-4xl font-bold text-gray-800">Your Favourites</h2>
       {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12">
          <p className="text-lg font-medium text-gray-600 mb-4">
            Nothing to show here
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {favourites.map((book) => (
            <div
              key={book._id}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src={`${File_BASE_URL}${book.imageURL}`}
                alt={book.title}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-4">by {book.author}</p>
              <p className="text-lg font-semibold text-gray-800">₹{book.price}</p>
              <button    onClick={() => removeFromFavourites(book._id)}
                type="button"
                className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Remove from Favourites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;









// import React, { useEffect, useState } from "react";

// const Favourites = () => {
//   const [favourites, setFavourites] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFavourites = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/getfavbooks", {
//           headers: {
//             "Content-Type": "application/json",
//             id:localStorage.getItem("id"),
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch favourites");
//         }
//         const data = await response.json();
//         setFavourites(data.favourites||[]);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFavourites();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>Error: {error}</p>;
//   }


//   return (
//     <div className="mx-auto max-w-6xl p-8 sm:p-12">
//       <h2 className="text-4xl font-bold text-gray-800">Your Favourites</h2>
//       {favourites.length === 0 ? (
//         <div className="flex flex-col items-center justify-center mt-12">
//           <p className="text-lg font-medium text-gray-600 mb-4">
//             Nothing to show here
//           </p>
//           <button
//             type="button"
//             className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
//           >
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//           {favourites.map((book, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
//             >
//               <img
//                 className="h-48 w-full object-cover rounded-md mb-4"
//                 src={book.image}
//                 alt={book.title}
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {book.title}
//               </h3>
//               <p className="text-gray-600 mb-4">by {book.author}</p>
//               <p className="text-lg font-semibold text-gray-800">₹{book.price}</p>
//               <button
//                 type="button"
//                 className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//               >
//                 Remove from Favourites
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Favourites;
