import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
ProductService.getAllProducts()
.then(response => {
setProducts(response.data);
})
.catch(error => {
console.error("Error fetching products:", error);
});
}, []);

      const handleDelete = (id) => {
ProductService.deleteProduct(id)
.then(() => {
setProducts(products.filter(product => product.id !== id));
})
.catch(error => console.error("Error deleting product:", error));
};

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                {/* Add Edit button and link to ProductForm */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductList;
```
