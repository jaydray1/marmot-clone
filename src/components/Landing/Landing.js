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
                            <img src={boxPic1} alt="media-ad" className="img-src"/>
                        </div>
                        <div className="main-subs">
                            <img src={boxPic2} alt="media-ad" className="img-src"/>
                        </div>
                        <div className="main-subs">
                            <img src={boxPic3} alt="media-ad" className="img-src"/>
                        </div>
                    </div>
            </div>
        )
    }

export default Landing