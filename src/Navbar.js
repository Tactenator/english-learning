import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <h2>Chillona</h2>
                <div className="navbar-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/quizzes">Cuestionario</Link>
                    <Link to="/create">Crear</Link>
                    <Link to="/articles">Artículos</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;