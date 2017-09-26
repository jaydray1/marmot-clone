import React from 'react';
import {Link} from 'react-router-dom';
import flag from '../../assets/country-flag.png';

import './Nav.css';

const Nav = _ => {
        return (
        <div className="main-wrapper">
            <div className="top-nav">
                <div className="top-left">
                    <div className="us"><img src={flag} className="murica" alt=""/> US </div>
                    <div className="support-dropdown">Support</div>
                </div>
                <div className="top-center">
                    <span>Free Expedited Shipping and Free Returns</span>
                </div>
                <div className="top-right">
                    <div className="top-right-dropdown"></div><div>Find Stores</div><div>My Account</div><div><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
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