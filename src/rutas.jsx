import React from "react";
import{BrowserRouter as  Router,Route,Routes} from "react-router-dom"
import Inicio from "./Inicio";
import Login from "./Login";
import Encuesta from "./Encuesta";
import Principal from "./Principal";
import { EdicionDietas } from "./EdicionDietas";
import { EdicionRutinas } from "./EdicionRutinas";


function Rutas(){
    return(
        <Router>
            <Routes>
                <Route path="/"element={<Inicio/>}/>
                <Route path="/Login"element={<Login/>}/>
                <Route path="/Encuesta"element={<Encuesta/>}/>
                <Route path="/Principal"element={<Principal/>}/>
                <Route path="/EdicionDietas"element={<EdicionDietas/>}/>
                <Route path="/EdicionRutinas"element={<EdicionRutinas/>}/>
            </Routes>
        </Router>
    )
}

export default Rutas;