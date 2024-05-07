import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import {BiMenuAltRight} from "react-icons/bi"

import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import { MdShoppingCart } from 'react-icons/md';
import {  Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { MdPerson } from 'react-icons/md';



const Navbar = () => {
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const history = useNavigate ();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      console.log(userDataFromStorage)
      if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
      }
  }, []);

 
  const handleLogout = () => {
    // Dispatch logout action
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
   history("/login")
  };
  
  const profile = () => {
   history("/profile")
  };

  return (
    <>

    <header className="site-navbar bg-white js-sticky-header site-navbar-target" role="banner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-6 col-xl-2">
        <h1 className="mb-0 site-logo"><a href="/home" className="text-black h2 mb-0">
          ADVISIONS<span className="text-primary">.</span> </a></h1>
      </div>
      <div className="col-6 col-md-10 d-none d-xl-block">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li><a href="/home" className="nav-link">Home</a></li>
            <li><a href="/Courses1" className="nav-link">Courses</a></li>
            <li><a className="nav-link">
          <>
          <a href="/cart">
       
       Cart ({state ? state.length : 0})</a></></a>
       </li>
       <li className="has-children">
            {userData ? (
                <>
                   <a className="nav-link" onClick={toggleDropdown}>{userData.userName}</a>

                    {isOpen && (
                        <ul className="dropdown">
                            <li><a href="/student-dashboard">Dashboard</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    )}
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </li>
            <li><a href="/codeEditor" className="nav-link">Code Editor</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3">
        <a href="/" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a>
      </div>
    </div>
  </div>
</header>
    </>
  )
}

export default Navbar


