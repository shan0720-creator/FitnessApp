import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

import Logo from '../assets/images/Logo.png';

const Navbar = () => {

  const { loginWithRedirect  } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
 return (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"s
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      
      {
         isAuthenticated && 
         
         ( <a href="" style={{ textDecoration: 'none', color: '#3A1212' }} >{user.name}</a>) 
        
      }

      {
         isAuthenticated ? 
         
         ( <a href="" style={{ textDecoration: 'none', color: '#3A1212' }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</a>) 
         :
         (<a href="" style={{ textDecoration: 'none', color: '#3A1212' }} onClick={() => loginWithRedirect()}>Log In</a>)
      }

      
    </Stack>
  </Stack>
 );
  
};

export default Navbar;
