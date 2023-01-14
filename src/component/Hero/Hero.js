import React from 'react';
import img from '../images/Scarecrow.png';
import './Hero.scss';

export default function Hero() {
  return (
    <>
    <div className="hero-container">
        <div className="img-container">
            <img src={img}  alt =''/>
        </div>

        <div className='hero-content'>
            <h4>I have bad news for you</h4>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
                <div className='btn' ><button>Back to homepage</button>
</div>       </div>
    </div>
    
    
    </>
  )
}
