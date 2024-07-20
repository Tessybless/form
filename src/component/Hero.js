import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section>
      <div className='section'>
        <div className='hero-text'>
          <h1>Unlock your business<br></br>potential with facebook and <br></br> instagram advertising</h1>
          <p>Lets handle it for you</p>
          <button>Start Now</button>

        </div>

        <img src="/images/hero.png" alt="" className='hero' />
      </div>
    </section>
  )
}

export default Hero