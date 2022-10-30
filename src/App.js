import React from 'react';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Order from './Components/Order/Order'
import Inventory from './Components/Manage Inventory/Inventory'
import About from './Components/About/About'

import { Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <div>
   <Header/>
   <Routes>
       <Route path="/shop" element={<Shop />} />
       <Route path="/order" element={<Order />} />
       <Route path="/inventory" element={<Inventory/>} />
       <Route path="/about" element={<About />} />
       <Route path="/*" element={<Shop />} />

   </Routes>
    </div>
  );
};

export default App;