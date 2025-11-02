import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const ProductsPage = ({ cart, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
