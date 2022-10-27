import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { addToDb, getStoreCart } from '../../utilities/fakedb';
const Shop = () => {
    const [viewProduct , setProduct] = useState([])
    const [cart , setCart] = useState ([])
    useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then (data => setProduct(data))
    },[]);

    useEffect( () => {
     const storeCart = getStoreCart();
     const savedCart = [];
     for(const id in storeCart){
           const addedProduct = viewProduct.find(product => product.id === id)

           if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity ;
            savedCart.push(addedProduct)
           }
     }
     setCart(savedCart); 
    },[viewProduct])

    const HandleAddTocart = (ProductsAll) => {
        let newCart = [] ;
        const exists =cart.find(product => product.id === ProductsAll.id);
        if(!exists){
            ProductsAll.quantity = 1 ;
            newCart = [...cart,ProductsAll];
         }
         else{
            const rest = cart.filter(product => product.id !== ProductsAll.id);
         exists.quantity = exists.quantity +1 ;
         newCart = [...rest,exists]
         }
        setCart(newCart)
        addToDb(ProductsAll.id)
    }

    return (
        <div>
           
                   
                <div className='Shop-Container '>
                    
                <div className="friend-container pl-3 ">
               

                {
                     viewProduct.map((AllProducts)=> <Products 
                     key = {AllProducts.id}
                     ProductsAll={AllProducts}
                     HandleAddTocart ={HandleAddTocart}
                     />)
                }
               </div>

               
               <div>
                 <Cart cart={cart}/> 
                </div>
                    
                </div>
          
        </div>
    );
};

export default Shop;