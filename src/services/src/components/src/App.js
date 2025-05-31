import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm'; // You'll create this

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Products</Link> | <Link to="/add">Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}
export default App;
