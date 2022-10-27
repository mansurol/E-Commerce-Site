import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    let total = 0 ;
    let shipping = 0 ;
    let tax = 0;
    let grandtotal = 0 ;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity ;
         total = total + product.price * product.quantity ;
        shipping = shipping + product.shipping;
        tax = parseFloat((total * 0.1).toFixed(2));
        grandtotal = total + shipping + tax ;
    }
    return (
        <div className="cart-container">
            <h3 className='text-center pt-3 '>Order Summary</h3>
                   <div className='p-3'>
                   <p>Selected items : {quantity} </p>
                    <p>Total price : {total} </p>
                    <p>Total shiping : {shipping}</p>
                    <p>Tex  : {tax}</p>
                    <p>Grand Total : {(grandtotal).toFixed(2)} </p>
                   </div>
               
        </div>
    );
};

export default Cart;