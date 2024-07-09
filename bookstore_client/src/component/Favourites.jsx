import React from "react";

const Favourites = ({ favourites = [] }) => {
  return (
    <div className="mx-auto max-w-6xl p-8 sm:p-12">
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
          {favourites.map((book, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src={book.image}
                alt={book.title}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-4">by {book.author}</p>
              <p className="text-lg font-semibold text-gray-800">₹{book.price}</p>
              <button
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
