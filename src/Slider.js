import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {

    return (
        <>
            <div className='slider'>
                <Carousel className='slider_img' infiniteLoop={true} autoPlay={true} interval={3000}>
                    <div>
                        <img src={require('./images/slider.1.JPG')} alt="" ></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.2.jpg')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.3.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.4.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.5.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.6.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.7.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.8.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.9.jpg')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.10.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.11.JPG')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/slider.12.JPG')} alt=""></img>
                    </div>
                    
                </Carousel>
            </div>

        </>
    )
}


export default Slider