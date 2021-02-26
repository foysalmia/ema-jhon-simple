import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    let total = 0;
    for(let i = 0; i <cart.length;i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total>100){
        shipping = 0;
    }
    else if(total>50){
        shipping = 5.99;
    }
    else if(total>0){
        shipping =12.99;
    }
    let tax = (total/10).toFixed(2);
    const grandTotal = (total + shipping +Number(tax)).toFixed(2);
    function fixNum(params) {
        const fixedNumber = Number(params).toFixed(2);
        return fixedNumber;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <h6>Items Ordered:{cart.length}</h6>
            <p>Product Price:{fixNum(total)}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <h5>Total Price:{grandTotal}</h5>
        </div>
    );
};

export default Cart;