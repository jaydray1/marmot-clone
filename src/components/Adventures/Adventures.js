import React from 'react';
import storyBanner from '../../assets/marmotDeskStoryBanner.jpeg';

import '../Adventures/Adventures.css';

export default function Adventures () {
        return(
            <div className="tiles-wrapper">
                    <img src={storyBanner} alt="adventures banner" className="ad-tile"/>
                    {/* <div className="left-box"></div> */}
                    {/* <div className="right-box"> */}
                    {/* <div className="content-wrapper">
                            <p className="category-header">{props.categoryHeader}</p>
                            <h1 className="title-header">{props.titleHeader}</h1>
                            <p className="tile-description">{props.tileDescription}</p>
                            <div className="button-group">
                                <button className="button1"> Read More </button>
                                <button className="button2">{props.subButton}</button>
                            </div>
                        </div> */}
                    {/* </div> */}
                        
            </div>
        )
}