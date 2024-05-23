import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-lk37mhy375a20hwc.us.auth0.com"
    clientId="Ko54HsC8Ml4LqpUHAFQEqdDNt86Za9E9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />

  </Auth0Provider>,
);
