import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products'; // Replace with your backend URL

const ProductService = {
  getAllProducts: () => axios.get(API_URL),
  getProductById: (id) => axios.get(`<span class="math-inline">\{API\_URL\}/</span>{id}`),
  createProduct: (product) => axios.post(API_URL, product),
  updateProduct: (id, product) => axios.put(`<span class="math-inline">\{API\_URL\}/</span>{id}`, product),
  deleteProduct: (id) => axios.delete(`<span class="math-inline">\{API\_URL\}/</span>{id}`),
};

export default ProductService;
