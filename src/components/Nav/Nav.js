import React from 'react';
import {Link} from 'react-router-dom';

import './Nav.css';

const Nav = _ => {
        return (
        <div className="main-wrapper">
            <div className="top-nav">
                <div className="top-left">

                </div>
                <div className="top-center">

                </div>
                <div className="top-right">
                    
                </div>
            </div>
            <div className="main">
                <div className="nav-header"> 
                <ul>
                    <Link className="linkage" to="/men">
                    <li className="link-nav">MEN</li>
                    </Link>
                    <Link className="linkage" to="/women">
                    <li className="link-nav">WOMEN</li>
                    </Link>
                    <Link className="linkage" to="/kids">
                    <li className="link-nav">KIDS</li>
                    </Link>
                    <Link className="linkage" to="/equipment">
                    <li className="link-nav">EQUIPMENT</li>
                    </Link>
                    <Link className="linkage" to="/sale">
                    <li className="link-nav">SALE</li>
                    </Link>
                </ul>
            </div>
            </div>
        </div>
        )
}

export default Nav