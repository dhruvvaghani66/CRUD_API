import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const navigate = useNavigate();

  const addProduct = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        title: newProduct.title,
        price: parseFloat(newProduct.price),
        description: newProduct.description,
        image: newProduct.image,
        category: newProduct.category,
      });
      console.log("Product added:", response.data);
      navigate("/", { state: { added: true } });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="add-product-page">
      <h1>Add New Product</h1>
      <div className="add-product-form">
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
