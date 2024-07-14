import React, { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    bookId: '',
    quantity: 1,
  });

  const [orderStatus, setOrderStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_API_ENDPOINT/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setOrderStatus('Order placed successfully!');
      } else {
        setOrderStatus('Failed to place order.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOrderStatus('Error placing order.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Order Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bookId" className="block text-sm font-medium text-gray-700">Book ID:</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            min="1"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Place Order
        </button>
      </form>
      {orderStatus && <p className="mt-4 text-center text-sm text-red-600">{orderStatus}</p>}
    </div>
  );
};

export default Order;



// import React, { useEffect, useState } from 'react';

// const PlaceOrder = ({ userId, bookId }) => {
//   const [status, setStatus] = useState('');

//   const placeOrder = async () => {
//     try {
//         useEffect(() => {
//             fetch("http://localhost:3000/api/getbook")
//               .then((res) => res.json())
//               .then((data) => setBooks(data));
//           }, []);
//       setStatus('Order placed successfully!');
//     } catch (err) {
//       setStatus('Failed to place order.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={placeOrder}>Place Order</button>
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default PlaceOrder;
