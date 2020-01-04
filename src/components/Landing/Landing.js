import React from 'react';
import { Link } from 'react-router-dom';
// import banner from '../../assets/marmot-main.jpeg';
import marmotGif from '../../assets/marmotFront.gif';
import './Landing.css';
import boxPic1 from '../../assets/box-1.jpeg';
import boxPic2 from '../../assets/box-2.jpeg';
import boxPic3 from '../../assets/box-3.jpeg';
import backBox from '../../assets/backgroundBoxes.jpeg';


import Carousel from '../Carousel/Carousel';
import Adventures from '../Adventures/Adventures';

const Landing = () => {
        return (
            <div className="main">
                <img src={marmotGif} alt="main-big" className="big-banner"/> 
                <button className="more-button">read more</button>
                    <div className="main-sub-3">
                    
                    <img src={backBox} alt="back" className="back-box"/>
                        <div className="main-subs">
                            <img src={boxPic1} alt="media-ad" className="img-src" width="421" height="266"/>
                            <div className="box-inside">
                                <h1>Fresh Finds</h1>
                                <p className="box-desc">New looks for spring adventures</p>
                                <p className="route">SHOP MEN<i className="fa fa-arrow-right" aria-hidden="true"></i></p> 
                            </div>
                        </div>
                        <div className="main-subs">
                            <img src={boxPic2} alt="media-ad" className="img-src"/>
                            <div className="box-inside">
                                <h1>Spring Forward</h1>
                                <p className="box-desc">New styles for awe-inspiring escapes</p>
                                <p className="route">SHOP WOMEN<i className="fa fa-arrow-right" aria-hidden="true"></i></p> 
                            </div>
                        </div>
                        <div className="main-subs">
                            <img src={boxPic3} alt="media-ad" className="img-src"/>
                            <div className="box-inside">
                                <h1>Up to 40% Off</h1>
                                <p className="box-desc">Get this gear and get out there</p>
                                <p className="route">SHOP NOW<i className="fa fa-arrow-right" aria-hidden="true"></i></p> 
                            </div>
                        </div>
                    </div>
                    <h2 className="pops">Popular<span className="season">This Season</span></h2>

                <ul className="links-div">
                    <Link className="links" to="/men">
                    <li className="links-nav">MEN</li>
                    </Link>
                    <Link className="links" to="/women">
                    <li className="links-nav">WOMEN</li>
                    </Link>
                    <Link className="links" to="/kids">
                    <li className="links-nav">KIDS</li>
                    </Link>
                    <Link className="links" to="/equipment">
                    <li className="links-nav">EQUIPMENT</li>
                    </Link>
                </ul>
                <Carousel />
                <div className="explore-others">
                    <button className="explore-button">view all popular items</button>
                </div>
                <h2 className="adventures">Explore<span className="season">Adventures</span></h2>
                <div className="adventures-elements">
                <Adventures/>
                </div>
                </div>
                
        )
    }

export default Landing