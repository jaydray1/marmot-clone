import React from 'react';
import {Link} from 'react-router-dom';
import flag from '../../assets/country-flag.png';
import marmotLetters from '../../assets/marmotLetters.svg';

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
                    {/* <div className="top-right-dropdown"></div> */}
                    <div className="dropdown">Inside Marmot
                    <i className="fa fa-caret-down"></i>
                    <div className="dropdown-content">
                        <div>
                            <p>our story</p>
                            <p>In April 1971, University of California Santa Cruz students Eric Reynolds and Dave Huntley were in Alaska's Juneau Icefield on a school Glaciology project. It was there on a glacier that the idea of a Marmot Club began.

</p>
                            <p> read more </p>
                        </div>
                        <div>Link 2</div>
                        <div>Link 3</div>
                        </div>
                    </div>
                    <a href="/">Find Stores</a><a href="/">My Account</a><div><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
                </div>
            </div>

            <div className="main-nav">
            <img src={marmotLetters} alt="logo" className="logo-small"/>
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
            {/* <span className="nav-filler"></span> */}
            <input type="text" placeholder="Search..." className="search"/>
            </div>
        </div>
        )
}

export default Nav