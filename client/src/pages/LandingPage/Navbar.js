import { Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { BiX } from 'react-icons/bi';

const Navbar = () => {
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const history = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const handleLogout = () => {
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
    <ChakraProvider>
      <header className="site-navbar bg-white js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo">
                <Link to="/home" className="text-black h2 mb-0">ADVISIONS<span className="text-primary">.</span> </Link>
              </h1>
            </div>
            <div className="col-6 col-md-10 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><Link to="/home" className="nav-link">Home</Link></li>
                  <li><Link to="/Courses1" className="nav-link">Courses</Link></li>
                  <li><Link to="/cart" className="nav-link">Cart ({state ? state.length : 0})</Link></li>
                  <li className="has-children">
                    {userData ? (
                      <Menu className="nav-link">
                        <MenuButton  as={Button} size="sm" className="nav-link">
                          {userData.userName}
                        </MenuButton>
                        <MenuList bg="white" color="black">
                          <MenuItem className="nav-link" onClick={() => history("/student-dashboard")}>Dashboard</MenuItem>
                          <MenuItem  className="nav-link" onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </Menu>
                    ) : (
                      <Link to="/login">
                        <Button colorScheme="blue" variant="outline" size="sm">Login</Button>
                      </Link>
                    )}
                  </li>
                  <li><Link to="/codeEditor" className="nav-link">Code Editor</Link></li>
                  <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3">
              <IconButton
                aria-label="Menu"
                rightIcon={<BiX />}
                variant="ghost"
                onClick={toggleDropdown}
                className="nav-link"
              />
              {isOpen && (
                <Box mt={2}>
                  <Menu className="nav-link" style = {{width : "50px"}}>
                    <MenuButton className="nav-link" as={Button} variant="outline" size="sm">
                      Menu
                    </MenuButton>
                    <MenuList bg="white" color="black" style = {{width : "200px"}}>
                      <MenuItem className="nav-link text-center" >
                        <Link to="/home">Home</Link>
                      </MenuItem>
                      <MenuItem className="nav-link" >
                        <Link to="/Courses1">Courses</Link>
                      </MenuItem>
                      <MenuItem className="nav-link" >
                        <Link to="/cart">Cart ({state ? state.length : 0})</Link>
                      </MenuItem>
                      <MenuItem className="nav-link" >
                        {userData ? (
                          <Link to="/student-dashboard">Dashboard</Link>
                        ) : (
                          <Link to="/login">Login</Link>
                        )}
                      </MenuItem>
                      <MenuItem className="nav-link" >
                        <Link to="/codeEditor">Code Editor</Link>
                      </MenuItem>
                      <MenuItem className="nav-link" >
                        <Link to="/contact">Contact</Link>
                      </MenuItem>
                      <MenuItem className="nav-link"  onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              )}
            </div>
          </div>
        </div>
      </header>
      </ChakraProvider>
    </>
  )
}

export default Navbar
