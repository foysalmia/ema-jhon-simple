import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in the stock -Order Soon</small></p>
                <button 
                    className='main-button'
                    onClick={()=>props.handleAddProduct(props.product)}
                    > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;