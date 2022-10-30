import React  from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { addToDb} from '../../utilities/fakedb';
import useProducts from '../Hook/useProducts';
import useCart from '../Hook/useCart';
const Shop = () => {
    const [viewProduct , setProduct] = useProducts()
    const [cart , setCart] = useCart ()


  
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