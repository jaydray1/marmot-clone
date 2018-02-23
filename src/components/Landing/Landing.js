import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import banner from '../../assets/marmot-main.jpeg';
import './Landing.css';
import boxPic1 from '../../assets/box-1.jpeg';
import boxPic2 from '../../assets/box-2.jpeg';
import boxPic3 from '../../assets/box-3.jpeg';
import backBox from '../../assets/backgroundBoxes.jpeg';

const Landing = () => {
        return (
            <div className="main">
                <img src={banner} alt="main-big" className="big-banner"/> 
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
            </div>
        )
    }

export default Landing