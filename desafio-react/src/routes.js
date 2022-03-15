import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Perfil from './pages/Perfil'

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Perfil/:nome' element={<Perfil/>}></Route>
            <Route path='*' element={<h1>Not Found</h1>}></Route>
        </Routes>
    );
} 
