import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import Navbar from "./components/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductsPage cart={cart} addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
