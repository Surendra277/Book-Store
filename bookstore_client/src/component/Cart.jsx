import React, {  useState,useEffect} from "react";
import { File_BASE_URL } from "../config";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getcartbook", {

          method:"GET",
          headers: {
          
            id:localStorage.getItem("id"),
            Authorization: "Bearer " + localStorage.getItem("token"),
            // "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        setCartItems(data.cart);
        console.log(data.cart);
  
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setError("Error fetching cart items. Please try again later.");
      }
    };

    fetchCartItems();
  }, []);

  const handleRemove = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/removefromcart/${bookId}`, {
        method: "PUT",
        headers: {
          id: localStorage.getItem("id"),
          Authorization: "Bearer " + localStorage.getItem("token"),
          // "Content-Type": "application/json",
          bookid:bookId
        },
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }
      const data = await response.json();
      alert(data.message);
      // Update state to remove the book
      setCartItems((prevCartBook) =>
        prevCartBook.filter((book) => book._id !== bookId)
      );
    } catch (error) {
      console.error("Error removing cart item:", error);
      setError("Error removing cart item. Please try again later.");
    }
  };
 
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);


  return (
    <div className="mx-auto my-24 flex max-w-4xl flex-col space-y-8 p-6 sm:p-12 bg-white shadow-2xl rounded-lg">
      <h2 className="text-4xl font-bold text-gray-800">Your Cart</h2>
      {error && <p className="text-red-500">{error}</p>}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12">
          <p className="text-lg font-medium text-gray-600 mb-4">
            Your cart is empty.
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <p className="mt-3 text-base font-medium text-gray-600">
            You have selected the following items. Review your cart and proceed to checkout.
          </p>
          <ul className="flex flex-col divide-y divide-gray-300">
            {cartItems.map((item) => (
              <li key={item._id} className="flex flex-col py-8 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-6">
                  <img
                    className="h-28 w-28 flex-shrink-0 rounded-md object-contain sm:h-36 sm:w-36"
                    src={`${File_BASE_URL}${item.imageURL}`}
                    alt={item.title}
                  />
                  <div className="flex w-full flex-col justify-between">
                    <div className="flex w-full justify-between pb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-500">by {item.author}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold text-gray-800">₹{item.price}</p>
                      </div>
                    </div>
                    <div className="flex space-x-4 text-sm">
                      <button
                        type="button"
                        className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:text-red-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                        <span onClick={() => handleRemove(item._id)}>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <p className="text-xl font-semibold text-gray-800">
              Total amount: <span className="font-bold">₹{totalAmount}</span>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Back to Shop
            </button>
            <button
              type="button"
              className="rounded-md bg-gray-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;




// import React, { useState } from "react";

// const Cart = () => {
  
//   const [cartItems, setCartItems] = useState([]);
//   const [favorites, setFavorites] = useState([]);


//   const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

//   const handleRemove = (index) => {
//     setCartItems(cartItems.filter((_, i) => i !== index));
//   };

//   const handleAddToFavorites = (item) => {
//     // Logic to add item to favorites
//     setFavorites([...favorites, item]);
//     console.log("Added to favorites:", item);

//   };

 
//   return (
//     <div className="mx-auto flex max-w-4xl flex-col space-y-8 p-6 sm:p-12 bg-white shadow-md rounded-lg">
//       <h2 className="text-4xl font-bold text-gray-800">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <div className="flex flex-col items-center justify-center mt-12">
//           <p className="text-lg font-medium text-gray-600 mb-4">
//             Your cart is empty.
//           </p>
//           <button
//             type="button"
    
//             className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
//           >
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <>
//           <p className="mt-3 text-base font-medium text-gray-600">
//             You have selected the following items. Review your cart and proceed
//             to checkout.
//           </p>
//           <ul className="flex flex-col divide-y divide-gray-300">
//             {cartItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex flex-col py-8 sm:flex-row sm:justify-between"
//               >
//                 <div className="flex w-full space-x-6">
//                   <img
//                     className="h-28 w-28 flex-shrink-0 rounded-md object-contain sm:h-36 sm:w-36"
//                     src={item.image}
//                     alt={item.title}
//                   />
//                   <div className="flex w-full flex-col justify-between">
//                     <div className="flex w-full justify-between pb-   4">
//                       <div className="space-y-2">
//                         <h3 className="text-xl font-semibold text-gray-800">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm text-gray-500">by {item.author}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xl font-semibold text-gray-800">
//                           ₹{item.price}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex space-x-4 text-sm">
//                       <button
//                         type="button"
//                         onClick={() => handleRemove(index)}
//                         className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:text-red-800"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-trash"
//                         >
//                           <path d="M3 6h18"></path>
//                           <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
//                           <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
//                         </svg>
//                         <span>Remove</span>
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => handleAddToFavorites(item)}
//                         className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:text-blue-800"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-heart"
//                         >
//                           <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
//                         </svg>
//                         <span>Add to Wishlist</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="text-right">
//             <p className="text-xl font-semibold text-gray-800">
//               Total amount: <span className="font-bold">₹{totalAmount}</span>
//             </p>
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
//             >
//               Back to Shop
//             </button>
//             <button
//               type="button"
//               className="rounded-md bg-gray-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//             >
//               Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
