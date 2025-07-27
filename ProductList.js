import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/products', {
  headers: { Authorization: `Bearer ${token}` }
})
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-list">
      {products.map(prod => (
        <div key={prod.id} className="product-card">
          <h3>{prod.name}</h3>
          <p>Salt: {prod.salt_content}</p>
          <p>{prod.description}</p>
          <small>{prod.review}</small>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
