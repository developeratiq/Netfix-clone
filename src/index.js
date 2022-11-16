import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import UserR from './UserR';
// import Refhooks from './Refhooks';
// import Check from './Check';
// import TechnicalRound from './technicalRound'
// import Ecommerce from './Ecommerce';
import App1 from './App1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   {/* <App /> */}
   {/* <UserR></UserR> */}
  {/* <Refhooks></Refhooks>
   */}
   {/* <Check></Check> */}
   {/* <TechnicalRound></TechnicalRound> */}
   {/* <Ecommerce></Ecommerce> */}
     <App1></App1>


   </BrowserRouter>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
