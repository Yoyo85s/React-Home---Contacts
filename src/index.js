import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './components/views/Home';
import Contacts from './components/views/Contacts'
import NotFound from './components/views/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


