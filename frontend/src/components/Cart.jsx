import axios from "axios";

export default function Cart({ cart, increaseQty, decreaseQty, setCart }){

  // TOTAL CALCULATION
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ CHECKOUT FUNCTION (API CALL)
  const handleCheckout = async () => {
  try {
    await axios.post("http://localhost:8080/api/orders", {
      items: cart,
      total: total
    });

    alert("🎉 Order placed successfully!");

    setCart([]); // ✅ clear cart

  } catch (error) {
    console.error(error);
    alert("❌ Failed to place order");
  }
};

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h2 className="text-3xl font-bold mb-6">My Dishes</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">No items added yet.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">

            {cart.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow">

                <img
                  src={item.image}
                  className="h-40 w-full object-cover rounded"
                />

                <h3 className="font-bold mt-2">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>

                <div className="flex justify-between mt-3 items-center">
                  <span className="text-orange-500 font-bold text-lg">
                    ₹{item.price}
                  </span>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* ITEM TOTAL */}
                <p className="text-sm text-gray-600 mt-2">
                  Subtotal: ₹{item.price * item.quantity}
                </p>

              </div>
            ))}

          </div>

          {/* TOTAL SECTION */}
          <div className="mt-10 flex justify-between items-center bg-white p-6 rounded-xl shadow">

            <h3 className="text-2xl font-bold">
              Total: ₹{total}
            </h3>

            <button
              onClick={handleCheckout}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
            >
              Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
}