import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';

function ProductList() {
  const [products, setProducts] = useState([]);
