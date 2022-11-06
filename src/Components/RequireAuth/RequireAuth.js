import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './RequireAuth.css'
const RequireAuth = ({children}) => {
    let [user] = useAuthState(auth)
    let location = useLocation();
    if(!user){
        return<Navigate to="/login" state={{from:location}} replace={false}></Navigate>
    }
    return children ;
};

export default RequireAuth;