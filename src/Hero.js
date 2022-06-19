import React from 'react'
import phone from './image/phone.svg'

const Hero = () => {
  return (
    <section className='hero-center'>
    <div className='hero'>
     <div className="text">
       <h2>
       payment infrastructure for the internet
       </h2>
       <p>Millions of comapnie sfrom startups to fortune-500 use stripe's software and api's to accept payments, 
         send payouts, and manage their business online.</p>
         <button className='sign-in-btn'>start-now</button>
     </div>
<div className="phone">
  <figure>
    <img src={phone} alt="phone" />
  </figure>
</div>
    </div>
    </section>
  )
}

export default Hero