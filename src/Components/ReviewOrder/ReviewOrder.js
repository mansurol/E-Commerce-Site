import React from 'react';
import './ReviewOrder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewOrder = (props) => {
    console.log(props)
    const {handdleRemoveProduct ,reviewProduct} = props
    const {img,name,price,shipping} = reviewProduct
    return (
      <div className='p-1'>
          <div className='boxCard'>
            <div className='d-flex'>
                <div>
                <img className="p-2" src={img} alt="Girl in a jacket" width="100" height="80"/> 
                </div>
                <div className='deleteAndContainer'>
                <div >
                    <span>{name}</span><br/>
                    <span>Price: ${price}</span><br/>
                    <span>Shipping: ${shipping}</span>
                </div>

                <div>
                    <button onClick={() => handdleRemoveProduct(reviewProduct)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
                </div>
            </div>
            
        </div>
      </div>
    );
};

export default ReviewOrder;