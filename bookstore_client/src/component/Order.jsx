import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { File_BASE_URL } from "../config";

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
        console.log(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders. Please try again later.");
      }
    };

    fetchOrders();
  }, []);

  const calculateExpectedDeliveryDate = (orderDate) => {
    const date = new Date(orderDate);
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString();
  };

  const cancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:3000/order/cancelorder/${orderId}`, {
        method: "POST",
        headers: {
          id: localStorage.getItem("id"),
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to cancel order");
      }

      const data = await response.json();
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      console.log(data);
    } catch (error) {
      console.error("Error canceling order:", error);
      setError("Error canceling order. Please try again later.");
    }
  };

  return (
    <div className="mx-auto my-24 flex max-w-4xl flex-col space-y-8 p-6 sm:p-12 bg-white shadow-2xl rounded-lg">
      <h2 className="text-4xl font-bold text-gray-800">Your Orders</h2>
      {error && <p className="text-red-500">{error}</p>}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12">
          <p className="text-lg font-medium text-gray-600 mb-4">You have no orders.</p>
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
          {orders.map((order) => {
            const { book } = order;
            const imageUrl = book && book.imageURL ? `${File_BASE_URL}${book.imageURL}` : "";
            const expectedDeliveryDate = calculateExpectedDeliveryDate(order.createdAt);

            return (
              <li key={order._id} className="flex flex-col py-8 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-6">
                  {imageUrl && (
                    <img
                      className="h-28 w-28 flex-shrink-0 rounded-md object-contain sm:h-36 sm:w-36"
                      src={imageUrl}
                      alt={book.title}
                    />
                  )}
                  <div className="flex w-full flex-col justify-between">
                    <div className="flex w-full justify-between pb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                        <p className="text-sm text-gray-500">by {book.author}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold text-gray-800">₹{book.price}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Order ID: {order._id}</p>
                      <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                      <p>Expected Delivery Date: {expectedDeliveryDate}</p>
                      <p>Delivery Status: {order.deliveryStatus}</p>
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        className="mt-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={() => cancelOrder(order._id)}
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Order;

