import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css"; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="product-details">
      <div className="product-card">
        <div className="image-container">
          <img src={product.image} alt={product.title} className="main-image" />
        </div>
        <div className="details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>{`Price: $${product.price}`}</h3>
          <button className="btn add-to-cart">Add to Cart</button>
          <button className="btn checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
