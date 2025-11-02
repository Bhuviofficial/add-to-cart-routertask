import React from "react";

const CartPage = ({ cart, removeFromCart, increaseQty, decreaseQty }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalTotal = total - discount;

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!😢</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p>Subtotal: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <h3>Final Total: ${finalTotal.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
