import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import '../src/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connect_formation from './connect_formation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/formation' element={<Connect_formation/>} />
        </Routes>
    </BrowserRouter>
    
  
);


