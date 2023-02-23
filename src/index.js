import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import '../src/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connect_formation from './component/connect_formation';
import Home from './component/Home';
import Connect_entreprise from './component/connect_entreprise';
import Connect_candidat from './component/connect_candidat';
import Inscription_candidat from './component/inscription_candidat';
import Inscription_entreprise from './component/inscription_entreprise';
import Inscription_formation from './component/inscription_formation';
import List_annonce_pro from './component/List_annonce_pro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home/>} />
                <Route path='/formation' element={<Connect_formation/>} />
                <Route path='/entreprise' element={<Connect_entreprise/>} />
                <Route path='/candidat' element={<Connect_candidat/>} />
                <Route path='/inscription-candidat' element={<Inscription_candidat/>} />
                <Route path='/inscription-entreprise' element={<Inscription_entreprise/>} />
                <Route path='/inscription-formation' element={<Inscription_formation/>} />
                <Route path='/liste-annonce-pro' element={<List_annonce_pro/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    
  
);


