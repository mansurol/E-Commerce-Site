import React from 'react';
import './Products.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
const {HandleAddTocart,ProductsAll} = props
const {img,name,seller,price,ratings} = ProductsAll

    return (
        <div>
            <div className="pt-3 main-cart">
            <Card  style={{ width: '21rem', height:'24rem'}}>
            <Card.Img style={{ height: '10rem' }} variant="top" src={img} />
            <Card.Body>
              <div>
              <p> {name}</p>
              <p>Price : {price}</p>
              <p>Seller : <small>{seller}</small></p>
              <p>Rating : <small>{ratings}</small></p>
              </div>
              </Card.Body>
              <Button onClick={() => HandleAddTocart(ProductsAll)} className='btn-cart ' variant="warning"><span className='p-2'>Add to cart</span> 
               <FontAwesomeIcon icon={faShoppingCart} />
              </Button>

            
            </Card>
            
        </div>
        </div>
    );
};

export default Products;