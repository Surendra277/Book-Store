import React, { useState } from "react";

function AddBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [categories, setCategories] = useState("");
  const [language, setLanguage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
      // const role = localStorage.getItem("role");
      // if (role == "admin") {
      const formInputs = new FormData();
      formInputs.append("title", title);
      formInputs.append("author", author);
      formInputs.append("categories", categories);
      formInputs.append("description", description);
      formInputs.append("price", price);
      formInputs.append("image", imageURL);
      formInputs.append("language", language);
      const response = await fetch("http://localhost:3000/api/book", {
        method: "POST",
        // headers: {
          // "Content-Type": "multipart/form-data",
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
          // Assuming user ID is stored in localStorage
        // },
        body: formInputs,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Book added successfully!");
        // Clear the form
        setTitle("");
        setAuthor("");
        setDescription("");
        setPrice("");
        setImageURL("");
        setCategories("");
        setLanguage("");
      } else {
        setMessage(data.message || "Error adding book");
      }
      // } else setMessage("Unotherized User");
    } catch (error) {
      console.error("Network error:", error);
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="w-full flex items-center justify-left min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100">
      <form
        className="w-full max-w-4xl p-8 sm:p-10 lg:p-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6 text-left">Add a New Book</h2>
        {message && <p className="text-center mb-4">{message}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageURL"
            >
              Image URL
            </label>
            <input
              type="file"
              id="imageURL"
              // value={imageURL}
              onChange={(e) => setImageURL(e.target.files[0])}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
              Genre
            </label>
            <select
              id="genre"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
             
            </select>
          </div>
          {/* <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="categories"
            >
              Categories
            </label>
            <input
              type="text"
              id="categories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div> */}
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="language"
            >
              Language
            </label>
            <input
              type="text"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;

// import React, { useState } from 'react';

// function AddBookForm() {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [genre, setGenre] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [language,setLanguage] =useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('author', author);
//     formData.append('genre', genre);
//     formData.append('description', description);
//     formData.append('price', price);
//     formData.append('image', image);
//     formData.append('language', language);

//     try {
//       const response = await fetch('http://localhost:3000/api/book', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("User signed up successfully:", data);
//         // Clear the form
//         setTitle('');
//         setAuthor('');
//         setGenre('');
//         setDescription('');
//         setPrice('');
//         setImage(null);
//       } else {
//         console.error("Error signing up:", data);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//     }
//   };
//   return (
//     <div className="w-full flex items-center justify-left min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100">
//       <form
//         className="w-full max-w-4xl p-8 sm:p-10 lg:p-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-3xl font-bold mb-6 text-left">Add a New Book</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 ">
//           <div className="mb-4 col-span-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4 col-span-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
//               Author
//             </label>
//             <input
//               type="text"
//               id="author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4 col-span-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
//               Genre
//             </label>
//             <input
//               type="text"
//               id="genre"
//               value={genre}
//               onChange={(e) => setGenre(e.target.value)}
//               className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4 col-span-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4 col-span-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
//               Price
//             </label>
//             <input
//               type="number"
//               id="price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4 col-span-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//               Language
//             </label>
//             <input
//               type="text"
//               id="language"
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-2 col-span-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//               Book Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setImage(e.target.files[0])}
//               className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-center mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
//           >
//             Add Book
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddBookForm;
