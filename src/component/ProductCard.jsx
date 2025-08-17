import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import PropTypes from 'prop-types';
import '../Style/ProductCard.css'; // import CSS file

function ProductCard({ image, name, price, description, onBuy }) {
  return (
    <div className="product-card">
      <img 
        src={image} 
        alt={name || "Product image"} 
        className="product-image" 
      />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price}</p>
      <p className="product-description">{description}</p>
      <button 
        onClick={onBuy} 
        aria-label={`Buy ${name}`} 
        className="buy-button"
      >
        <HiOutlineShoppingCart /> BUY NOW
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  onBuy: PropTypes.func.isRequired,
};

export default ProductCard;
