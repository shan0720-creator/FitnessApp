import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain="dev-ldhh5hvndw855blm.us.auth0.com"
  clientId="pVUG3TxUE3W0eFno9P073sD09CVtx0Kh"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</Auth0Provider>,
  
);

