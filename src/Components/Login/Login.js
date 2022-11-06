import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
 
      if(user){
        navigate (from , {replace : true})
     }
     if (loading) {
        return <p>Loading...</p>;
      }
    
    return (
        <div className='container'>
           
        <div className='form-container'>
             <div>
                 <h2 className='form-title'>Login</h2>
             <form>
             <div className='input-group'>
                     <label htmlFor = 'email'>Email</label>
                     <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder='Enter your Email'required></input>

                 </div>

                 <div className='input-group'>
                     <label htmlFor = 'password'>Password</label>
                     <input onChange={(e) => setPassword(e.target.value)} type="password" name="email" id="" placeholder='Enter you password'required></input>

                 </div>
                 <div style={{color:"red"}}>{error?.message}</div>

                 <input onClick={() => signInWithEmailAndPassword(email, password)} className='form-submit' type="submit" value="Login"></input>
             </form>
             <div className='form-new'>
                 <small>New to EmaJhon ? <Link to="/signup" className='link-color'>Create a new account</Link></small>
             </div>


             </div>
             
         </div>
     </div>
    );
};

export default Login;


/*import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate =useNavigate()
    const [signInWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

    const handdleEmailblur = event =>{
        setEmail(event.target.value);
    }

    const handdlePasswordblur = event =>{
        setPassword(event.target.value);
    }
    if(user){
        navigate('/inventory')
     }
     if (loading) {
        return <p>Loading...</p>;
      }
    const handdleCreateUser  = event => {
        event.preventDefault();
       
    
        signInWithEmailAndPassword(email,password);
       }

    return (
        <div className='container'>
           
           <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                <form onSubmit={handdleCreateUser}>
                <div className='input-group'>
                        <label htmlFor = 'email'>Email</label>
                        <input onBlur={handdleEmailblur} type="email" name="email" id="" placeholder='Enter your Email'required></input>

                    </div>

                    <div className='input-group'>
                        <label htmlFor = 'password'>Password</label>
                        <input onBlur={handdlePasswordblur} type="password" name="email" id="" placeholder='Enter you password'required></input>

                    </div>
                    <div style={{color:"red"}}>{error?.message}</div>
                   <p>{loading}</p>
                    <input  className='form-submit' type="submit" value="Login"></input>
                </form>
                <div className='form-new'>
                    <small>New to EmaJhon ? <Link to="/signup" className='link-color'>Create a new account</Link></small>
                </div>


                </div>
                
            </div>
        </div>
    );
};

export default Login;*/
