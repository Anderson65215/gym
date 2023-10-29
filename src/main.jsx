import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import Encuesta from './Encuesta';
import Inicio from './Inicio';
import Login from './Login';
import Menu from './Principal';
import Rutas from './rutas';



const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
    <React.StrictMode>
        <Rutas/>
    </React.StrictMode>

);

