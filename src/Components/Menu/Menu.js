import React from 'react';
import './Navi.css'

import {NavLink} from 'react-router-dom';

const Menu =() =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand navbar-logo" to ="/" exact>
                Halmart
            </NavLink>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
                <i className="fas fa-bars
                text-white">
                </i>

            </button>
            <div
            className="collapse
            navbar-collapse"
            id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <i className="fas fa-home">

                            </i>Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>
                             <i className="fas fa-favourites">
                             </i>Favourites
                        </NavLink>
                    </li>
                    <li className="nav-item">
                         <NavLink className="nav-link" to="/" exact>
                             <i className="fas fa-setting">
                            </i>Settings
                        </NavLink>
                    </li>

                </ul>

            </div>

        </nav>
        
        
        
        
        
    )
}

export default Menu;