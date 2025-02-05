import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>🔥🔥🔥 Newest Arrivals 🔥🔥🔥</h2>
                <h1>Discover the <span className="highlight">Latest Trends</span></h1>
                <p><span className="highlight1">Unmatched</span> style. <span className="highlight1">Premium</span> quality.  <span className="highlight1">Best Designs</span> for you.</p>

                <div className="hero-hand-icon">
                    <img src={hand_icon} alt="hand" />
                    <p>Exclusive Drop</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>

            </div>  
            
            <div className="hero-right">
                <img className="hero-image" src={hero_image} alt="heroImage" />
            </div>
        </div>
    );
}

export default Hero;
