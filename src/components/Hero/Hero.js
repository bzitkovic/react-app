import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="HeroSection-Div">
            <p><b>Tjedan Karijera</b></p>
            <h2>FOI</h2>
            <p> 20.10.2020. - 26.10.2020. </p>
            <button type="button" className="HeroSection-Button"><b>Prijavi se</b></button>
        </div>
    )
}

export default Hero;