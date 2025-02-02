// src/components/ProductPage.js
import React from 'react';
import './ProductPage.css'; // Import the CSS file for styles

const ProductPage = () => {
    return (
        <div className="product-container">
            <h1>Product Page</h1>
            <p>Details about the products will go here.</p>
            <div className="product-list">
                <div className="product-item">
                    <h2>Product 1</h2>
                    <p>Description of Product 1.</p>
                </div>
                <div className="product-item">
                    <h2>Product 2</h2>
                    <p>Description of Product 2.</p>
                </div>
                <div className="product-item">
                    <h2>Product 3</h2>
                    <p>Description of Product 3.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;