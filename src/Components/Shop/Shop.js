import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [Product , setProduct] = useState([])
    const [cart , setCart] = useState ([])
    useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then (data => setProduct(data))
    },[]);

    const HandleAddTocart = (ProductsAll) => {
        const newCart = [...cart ,ProductsAll]
        setCart(newCart)
    }

    return (
        <div>
           
                   
                <div className='Shop-Container '>
                    
                <div className="friend-container pl-3 ">
               

                {
                     Product.map((AllProducts)=> <Products 
                     key = {AllProducts.id}
                     ProductsAll={AllProducts}
                     HandleAddTocart ={HandleAddTocart}
                     />)
                }
               </div>

               
               <div className="">
               <h3 className='text-center pt-3 '>Order Summary</h3>
                    OrderLength : {cart.length}
               </div>
                </div>
                    
                
          
        </div>
    );
};

export default Shop;