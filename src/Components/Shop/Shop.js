import React  from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { addToDb} from '../../utilities/fakedb';
import useProducts from '../Hook/useProducts';
import useCart from '../Hook/useCart';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
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
                <Cart cart={cart}>
                    <Link to="/order">
                    <Button variant="warning"><span className='p-2'>Review Order</span> </Button>
                    </Link>
                </Cart>
                
                </div>
                    
                </div>
          
        </div>
    );
};

export default Shop;