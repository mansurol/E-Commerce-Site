import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='container'>
           
           <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                <form>
                <div className='input-group'>
                        <label htmlFor = 'email'>Email</label>
                        <input type="email" name="email" id="" placeholder='Enter your Email'required></input>

                    </div>

                    <div className='input-group'>
                        <label htmlFor = 'password'>Password</label>
                        <input type="password" name="email" id="" placeholder='Enter you password'required></input>

                    </div>
                    <input className='form-submit' type="submit" value="Login"></input>
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



