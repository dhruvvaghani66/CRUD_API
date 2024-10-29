import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AddProduct from "./components/AdminPanel/AddProduct/AddProduct";
import EditProduct from "./components/AdminPanel/EditProduct/EditProduct";
import { ProductProvider } from "./components/ ProductContext";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <ProductProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </ProductProvider>
  );
}

export default App;

