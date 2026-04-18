import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import Contact from "./components/Contact";

export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  // ✅ ADD TO CART (NO DUPLICATE + QUANTITY)
  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      const updated = cart.map(i =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // ➕ INCREASE QUANTITY
  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updated);
  };

  // ➖ DECREASE QUANTITY (REMOVE IF 0)
  const decreaseQty = (id) => {
    const updated = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    setCart(updated);
  };

  return (
    <>
      <Navbar cartCount={cart.length} setPage={setPage} />

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <Hero />
          <Menu addToCart={addToCart} />
          <div className="w-full">
            <Contact />
          </div>
        </>
      )}
      {page === "contact" && (
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <Contact />
        </div>
      )}
      {/* CART PAGE */}
      {page === "cart" && (
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            setCart={setCart}
          />
        </div>
      )}
      {page === "orders" && (
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <OrderHistory />
        </div>
      )}
    </>
  );
}