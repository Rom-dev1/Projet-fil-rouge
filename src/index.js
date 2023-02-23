import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import '../src/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connect_formation from './connect_formation';
import Home from './component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home/>} />
                <Route path='/formation' element={<Connect_formation/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    
  
);


