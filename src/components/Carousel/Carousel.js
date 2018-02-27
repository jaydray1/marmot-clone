import React, { Component } from 'react';
import Slider from 'react-slick';
import jackets from '../../config/jackets';
import '../Carousel/Carousel.css';

export default class Carousel extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            className: 'slider',
            arrows: true
        };
        var Jackets = jackets.map(function(jacket) {
            return <div className="slide-deck" key={jacket.id}>
                        <img src={jacket.image} alt="jacket" width="227" height="407" className="img"/>
                            <div className="jacket-title">{jacket.title}</div>
                            <div className="jacket-price">${jacket.price}</div>
                   </div>
        })
        return (
            <Slider {...settings} >
                {Jackets}
            </Slider>
        )
    }
}