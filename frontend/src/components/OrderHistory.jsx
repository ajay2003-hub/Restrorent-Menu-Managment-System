import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 md:p-10 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 tracking-tight drop-shadow-lg flex items-center justify-center gap-3">
        <span className="text-3xl">🧾</span> Order History
      </h2>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <span className="text-6xl mb-4">📭</span>
          <p className="text-lg text-gray-500">No orders found.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-7 max-w-3xl mx-auto">
          {orders.map(order => (
            <div
              key={order.id}
              className="flex bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-orange-200 via-purple-200 to-blue-200 flex items-center justify-center">
                <img
                  src={order.items[0]?.image || 'https://img.icons8.com/ios-filled/100/restaurant.png'}
                  alt={order.items[0]?.name || 'Order'}
                  className="object-cover w-20 h-20 md:w-28 md:h-28 rounded-xl shadow-md border-2 border-white"
                  onError={e => e.target.src = 'https://img.icons8.com/ios-filled/100/restaurant.png'}
                />
              </div>

              {/* DETAILS */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-indigo-500">📅</span>
                    <span className="text-gray-500 text-sm font-medium">{order.createdAt}</span>
                  </div>
                  <div className="font-bold text-lg text-gray-800 mb-2">Order #{order.id}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {order.items.map((item, idx) => (
                      <span key={idx} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 border border-indigo-100">
                        <span>🍽️</span> {item.name} <span className="text-gray-400">×{item.quantity}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-400">{order.items.length} item{order.items.length > 1 ? 's' : ''}</div>
                  <div className="flex items-center gap-2 text-lg font-bold text-orange-600">
                    <span className="text-2xl">💰</span>
                    <span>Total: ₹{order.total}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}