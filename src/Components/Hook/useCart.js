import React, { useEffect, useState } from 'react';
import { getStoreCart } from '../../utilities/fakedb';
import useProducts from './useProducts';

const useCart = () => {

const [viewProduct , setProduct] = useProducts()
const [cart , setCart] = useState ([])

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
 return [cart , setCart] ;

};

export default useCart;