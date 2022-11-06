import React from 'react';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Order from './Components/Order/Order'
import Inventory from './Components/Manage Inventory/Inventory'
import About from './Components/About/About'

import { Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipping from './Components/Shipment/Shipping';
const App = () => {
  return (
    <div>
   <Header/>
   <Routes>
        <Route path="/" element={<Shop />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/order" element={<Order />} />
       <Route path="/inventory" element={
                <RequireAuth>

       <Inventory/>
       </RequireAuth>

       } />
      
      <Route path="/shipment" element={
         <RequireAuth>
           <Shipping/>
         </RequireAuth>
     } />
       <Route path="/about" element={<About />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignUp />} />
       

   </Routes>
    </div>
  );
};

export default App;