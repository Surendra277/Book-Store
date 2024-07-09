// PlaceOrder.jsx
import React, { useEffect, useState } from 'react';

const PlaceOrder = ({ userId, bookId }) => {
  const [status, setStatus] = useState('');

  const placeOrder = async () => {
    try {
        useEffect(() => {
            fetch("http://localhost:3000/api/getbook")
              .then((res) => res.json())
              .then((data) => setBooks(data));
          }, []);
      setStatus('Order placed successfully!');
    } catch (err) {
      setStatus('Failed to place order.');
    }
  };

  return (
    <div>
      <button onClick={placeOrder}>Place Order</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default PlaceOrder;
