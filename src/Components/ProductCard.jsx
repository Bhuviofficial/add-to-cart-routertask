import React from "react";

const ProductCard = ({ product, addToCart, cart }) => {
  const inCart = cart.some((item) => item.id === product.id);
  const stars = Math.round(product.rating?.rate || 0);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.slice(0, 40)}...</h3>
      <div className="rating">
        {"⭐".repeat(stars)} <span>({product.rating?.count})</span>
      </div>
      <p className="desc">{product.description.slice(0, 80)}...</p>
      <p className="price">${product.price}</p>
      <button onClick={() => addToCart(product)}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
