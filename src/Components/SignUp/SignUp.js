import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate =useNavigate()
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const handdleEmailblur = event =>{
        setEmail(event.target.value);
    }

    const handdlePasswordblur = event =>{
        setPassword(event.target.value);
    }
    const handdleConfirmPasswordblur = event =>{
        setConfirmPassword(event.target.value);
    }
   const handdleCreateUser  = event => {
    event.preventDefault();
    if(password !==confirmPassword){
        setError('password did not match')
        return;

       
    }
    if(password.length<5 ){
        setError('password must be 5 digit')
        return;
    }

    createUserWithEmailAndPassword(email,password);
   }
 if(user){
    navigate('/shop')
 }
    return (
        <div className='container'>
           
        <div className='form-container'>
             <div>
                 <h2 className='form-title'>SignUp</h2>
             <form onSubmit={handdleCreateUser}>
             <div className='input-group'>
                     <label htmlFor = 'email'>Email</label>
                     <input onBlur={handdleEmailblur} type="email" name="email" id="" placeholder='Enter your Email' required></input>

                 </div>

                 <div className='input-group'>
                     <label htmlFor = 'password'>Password</label>
                     <input onBlur={handdlePasswordblur} type="password" name="password" id="" placeholder='Enter you password'required></input>

                 </div>

                 
                 <div className='input-group'>
                     <label htmlFor = 'confirm-password'>Confirm Password</label>
                     <input onBlur={handdleConfirmPasswordblur}  type="password" name="confirm-password"id="" placeholder='Enter you re-password 'required></input>

                 </div>
                 <p style={{color:'red'}} className="text-center">{error}</p>
                 <input className='form-submit' type="submit" value="SignUp"></input>
             </form>
             <div className='form-new'>
                 <small>Already have an account ? <Link to="/login" className='link-color'>Login</Link></small>
             </div>


             </div>
             
         </div>
     </div>

    );
};

export default SignUp;