import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useProducts } from "../ ProductContext";

const Products = () => {
  const { products, setProducts } = useProducts();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setLoading(true);
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
  }, [products.length, setProducts]);
  return (
    <div className="products-container">
      {loading && <h1>Loading...</h1>}
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} className="card-image" />
          <div className="card-description">
            <h6 className="card-title">
              {product.title.length > 20
                ? `${product.title.substring(0, 20)}...`
                : product.title}
            </h6>
            <h6 className="card-price">{` $${product.price}`}</h6>
            <h6 className="card-category">{` ${product.category}`}</h6>
            <Link to={`/product/${product.id}`}>
              <button className="buy-button">Buy Product</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
