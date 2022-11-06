import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipping.css'
const Shipping = () => {
    const [name,setName] = useState('');
    const [Address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [error,setError] = useState('');
const [user] = useAuthState(auth)
    const handdleNameblur = event =>{
        setName(event.target.value);
    }


    const handdleAddressblur = event =>{
        setAddress(event.target.value);
    }

    const handdlePhoneblur = event =>{
        setPhone(event.target.value);
    }

    const handdleCreateUser  = event => {
        event.preventDefault();
       
           
        }
    return (
        <div className='container'>
           
        <div className='form-container'>
             <div>
                 <h2 className='form-title'>Shipping Information</h2>
             <form onSubmit={handdleCreateUser}>
             <div className='input-group'>
                     <label htmlFor = 'name'>Name</label>
                     <input onBlur={handdleNameblur} type="text" name="name" id="" placeholder='Enter your Name' required></input>

                 </div>


             <div className='input-group'>
                     <label htmlFor = 'email'>Email</label>
                     <input value={user?.email} readOnly type="email" name="email" id="" placeholder='Enter your Email' required></input>

                 </div>

                 <div className='input-group'>
                     <label htmlFor = 'address'>Address</label>
                     <input onBlur={handdleAddressblur} type="text" name="Address" id="" placeholder='Enter you address'required></input>

                 </div>

                 
                 <div className='input-group'>
                     <label htmlFor = 'phone'>Phone</label>
                     <input onBlur={handdlePhoneblur}  type="text" name="Phone"id="" placeholder='Enter your Phone'required></input>

                 </div>
                 <p style={{color:'red'}} className="text-center">{error}</p>
                 <input className='form-submit' type="submit" value="Shipping Now"></input>
             </form>
           


             </div>
             
         </div>
     </div>
    );
};

export default Shipping;