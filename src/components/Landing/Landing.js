import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import banner from '../../assets/marmot-main.jpeg';
import './Landing.css';

const Landing = () => {
        return (
            <div className="main">
                <img src={banner} alt="main-big" className="big-banner"/> 
                    <div className="main-sub-3">
                        <div className="main-subs"></div>
                        <div className="main-subs"></div>
                        <div className="main-subs"></div>
                    </div>
            </div>
        )
    }

export default Landing