import React from 'react'

function Hero() {
  return (
    <main className='hero'>
        <div className='hero-text'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Experience unparalleled comfort and style with our premium footwear collection, designed to keep you moving with confidence.</p>
            <div className='hero-button'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
            </div>
            <div className='shopping'>
            <p>Also Available On</p>
            <div className='socials'>
                <img src="/amazon.png" alt="amazon" />
                <img src="/flipkart.png" alt="flipkart" />
                </div>
                </div>
        </div>
        <div className='hero-image'>
            <img src="/shoe_image.png" alt="shoe" className='shoe' />
        </div>
    </main>
  )
}

export default Hero
