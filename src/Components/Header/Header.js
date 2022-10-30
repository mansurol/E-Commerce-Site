import React from 'react';
import './Header.css'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div>
       <Navbar bg="dark" expand="lg">
<Container>
<Navbar.Brand href="#home"><img src={Logo} alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="ms-auto my-2 my-lg-0"> 
    <Nav.Link href="/shop"><span className="MenuBarContent">Shop</span></Nav.Link>
    <Nav.Link href="/order"><span className="MenuBarContent">Order</span></Nav.Link>
    <Nav.Link href="/inventory"><span className="MenuBarContent">Manage Inventory</span></Nav.Link>
    <Nav.Link href="/about"><span className="MenuBarContent">About</span></Nav.Link>
    
    
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </div>

    );
};

export default Header;


