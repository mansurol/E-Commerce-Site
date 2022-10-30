import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
import useProducts from '../Hook/useProducts';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import './Order.css'
const Order = () => {
    const [viewProduct , setProduct] = useProducts()
    const [cart , setCart] = useCart (viewProduct)

    const handdleRemoveProduct = reviewProduct => {
        const rest = cart.filter(pb => pb.id !== reviewProduct.id)
        setCart(rest)
    }


    return (
        <div className='container'>
            <div className='d-flex'>
                <div className='mt-5'>
                    <h2 className='text-center'>Order List </h2>
                    {
                      cart.map(reviewProduct => <ReviewOrder key={reviewProduct.id} handdleRemoveProduct={handdleRemoveProduct} reviewProduct={reviewProduct}/> )

                    }
                </div>
                <div className='m-auto mt-5'>
                <Cart cart={cart}/> 

                </div>

            </div>

        </div>
    );
};

export default Order;