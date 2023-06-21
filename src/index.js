import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login2 from './views/Login2';
import Registration2 from './views/Registration2';
import DisplayData from './views/DisplayData';
import Navbar2 from './components/Navbar2';
import Header_nav from './components/Header_nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    {/* <Navbar2/> */}
    <Header_nav/>
    
              <Routes>
                <Route path='/' element={<App/>}></Route>
                 <Route path='/Login2' element={<Login2/>}></Route>
                 <Route path='/Registration2' element={<Registration2/>} > </Route>
                 <Route path = '/DisplayData' element={<DisplayData/>}></Route>
              </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
