import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const updateProduct = async () => {
    try {
      await axios.put(`https://fakestoreapi.com/products/${id}`, product);
      navigate("/", { state: { updated: true } });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="edit-product-page">
      <h1>Edit Product</h1>
      <div className="edit-product-form">
        <input
          type="text"
          placeholder="Title"
          value={product.title || ""}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={product.price || ""}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={product.description || ""}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={product.image || ""}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={product.category || ""}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <button onClick={updateProduct}>Update Product</button>
      </div>
    </div>
  );
};

export default EditProduct;
