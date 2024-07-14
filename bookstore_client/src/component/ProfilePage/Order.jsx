import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { File_BASE_URL } from "../../config";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/order/getorder", {
          method: "GET",
          headers: {
            id: localStorage.getItem("id"),
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data.orderData);
        console.log(data)
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders. Please try again later.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mx-auto my-24 flex max-w-4xl flex-col space-y-8 p-6 sm:p-12 bg-white shadow-2xl rounded-lg">
      <h2 className="text-4xl font-bold text-gray-800">Your Orders</h2>
      {error && <p className="text-red-500">{error}</p>}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12">
          <p className="text-lg font-medium text-gray-600 mb-4">
            You have no orders.
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
      ) : (
        <ul className="flex flex-col divide-y divide-gray-300">
          {orders.map((order) => (
            <li key={order._id} className="flex flex-col py-8 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-6">
                <img
                  className="h-28 w-28 flex-shrink-0 rounded-md object-contain sm:h-36 sm:w-36"
                  src={`${File_BASE_URL}${order.imageURL}`}
                  alt={order.book.title}
                />
                <div className="flex w-full flex-col justify-between">
                  <div className="flex w-full justify-between pb-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800">{order.book.title}</h3>
                      <p className="text-sm text-gray-500">by {order.book.author}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold text-gray-800">₹{order.book.price}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Order ID: {order._id}</p>
                    <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Order;
