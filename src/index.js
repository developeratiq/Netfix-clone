import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import UserR from './UserR';
// import Refhooks from './Refhooks';
// import Check from './Check';
// import TechnicalRound from './technicalRound'
// import Ecommerce from './Ecommerce';
import App1 from './App1';
import Allcomp from './Cric/Allcomp';

import { Auth0Provider } from "@auth0/auth0-react";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
  
  <Auth0Provider
    domain="dev-h3tcjmayto0aak58.us.auth0.com"
    clientId="tt6g4pbL27MrF9lHq04DNGxylNVQXQp5"
    redirectUri={window.location.origin}
  >
    <Allcomp/>
    
  </Auth0Provider>,



   
   {/* <UserR></UserR> */}
  {/* <Refhooks></Refhooks>
   */}
   {/* <Check></Check> */}
   {/* <TechnicalRound></TechnicalRound> */}
   {/* <Ecommerce></Ecommerce> */}
     {/* <App1></App1> */}


   </BrowserRouter>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
