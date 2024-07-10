import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";
import { File_BASE_URL } from "../config";

const categories = [
  'Action', 'Adventure', 'Fiction', 'Non-Fiction', 'Mystery',
  'Sci-Fi', 'Fantasy', 'Romance', 'Thriller', 'Horror'
];

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // const handleAdd = (book) => {
  //   console.log(`Added ${book.title} to cart.`);
  // };

  useEffect(() => {
    fetch("http://localhost:3000/api/getbook")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks = selectedCategory === 'All'
    ? books
    : books.filter(book => book.categories.includes(selectedCategory));

  const handleNavigate = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="flex relative mt-16">
      <aside className="w-1/6 fixed flex flex-col items-center bg-teal-200 border border-black rounded-lg shadow-lg p-4">
        <h3 className="text-3xl font-bold mb-2">Categories</h3>
        <ul className="space-y-1 w-full">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer text-lg p-2 rounded ${selectedCategory === category ? 'bg-teal-500 text-white font-bold' : 'hover:bg-teal-300'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
          <li
            className={`cursor-pointer text-lg p-2 rounded ${selectedCategory === 'All' ? 'bg-teal-500 text-white font-bold' : 'hover:bg-teal-300'}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </li>
        </ul>
      </aside>
      <main className="w-3/4 lg:ml-80">
        <h2 className="text-5xl font-bold text-center mt-8 mb-12">All Books are here</h2>
        <div className="mx-5 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {filteredBooks.map((book) => (
            <Card key={book._id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={`${File_BASE_URL}${book.imageURL}`}
                alt=""
                className="h-64 object-contain mb-4 rounded-lg"
              />
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
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;





// import React, { useState, useEffect } from "react";
// import { Card } from "flowbite-react";
// import { File_BASE_URL } from "../config";

// const categories = [
//   'Action', 'Adventure', 'Fiction', 'Non-Fiction', 'Mystery', 
//   'Sci-Fi', 'Fantasy', 'Romance', 'Thriller', 'Horror'
// ];

// const Shop = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const handleAdd = (book) => {
//     console.log(`Added ${book.title} to cart.`);
//   };

//   useEffect(() => {
//     fetch("http://localhost:3000/api/getbook")
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, []);

//   const filteredBooks = selectedCategory === 'All' 
//     ? books 
//     : books.filter(book => book.categories.includes(selectedCategory));

//   return (
//     <div className="flex realtive mt-16 ">
      
//       <aside className="w-1/6  fixed flex flex-col items-center bg-teal-200 border border-black rounded-lg shadow-lg p-4 ">
//         <h3 className="text-3xl font-bold mb-2">Categories</h3>
//         <ul className="space-y-1 w-full">
//           {categories.map((category) => (
//             <li 
//               key={category} 
//               className={`cursor-pointer text-lg p-2 rounded ${selectedCategory === category ? 'bg-teal-500 text-white font-bold' : 'hover:bg-teal-300'}`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </li>
//           ))}
//           <li 
//             className={`cursor-pointer text-lg p-2 rounded ${selectedCategory === 'All' ? 'bg-teal-500 text-white font-bold' : 'hover:bg-teal-300'}`}
//             onClick={() => setSelectedCategory('All')}
//           >
//             All
//           </li>
//         </ul>
//       </aside>
//       <main className="w-3/4 lg:ml-80">
//         <h2 className="text-5xl font-bold text-center mt-8 mb-12">All Books are here</h2>
//         <div className="mx-5 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
//           {filteredBooks.map((book) => (
//             <Card key={book._id} className=" shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={`${File_BASE_URL}${book.imageURL}`}
//                 alt=""
//                 className="h-64  object-contain mb-4 rounded-lg"
//               />
//               <div className="text-sm font-medium tracking-tight text-gray-900 dark:text-white">
//                 <p><span className="font-extrabold"> Title: </span>{book.title}</p>
//                 <p><span className="font-extrabold">Author: </span>{book.author}</p>
//                 <p><span className="font-extrabold">Price:</span> ₹{book.price}</p>
//               </div>
              
              
//               <button className="bg-blue-700 font-semibold text-white py-2 rounded mt-2 w-full">
//                 Shop Now
//               </button>
//             </Card>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Shop;
