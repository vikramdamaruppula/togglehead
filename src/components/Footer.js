import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='main-footer'>
    {/* contact us */}
        <div className='contact-us'>
            <h3> Contact Us</h3>
            <p>Adress :amet, hdhehndin uhe uee ised dia</p>
            <p>EmailId :eirmod tempor hbehde fehfeuh fej sed diam </p>
            <p>Phone :123456789</p>
        </div>
        {/* follow us */}
        <div className='follow-us'>
            <h3 style={{marginBottom:'12px'}} > Follow Us</h3>
            <i class="fa-brands fa-facebook fa-fade fa-2xl"></i>
            <i class="fa-brands fa-linkedin  fa-2xl"></i>
            <i class="fa-brands fa-instagram fa-2xl"></i>
            <i class="fa-brands fa-twitter fa-2xl" ></i>
            <i class="fa-brands fa-youtube fa-2xl"></i>
            <i class="fa-brands fa-quora fa-beat fa-2xl"></i>
        </div> 
        {/* Head office */}
        <div className='mobile-head'>
        <h3> Head office</h3>
        <div className='head-office'><i class="fa-solid fa-location-dot"></i>
        <p>orem ipsumL orem Ipsum available, but the majority have suffered </p> </div>
        <div className='head-office'>
        <i class="fa-regular fa-clock"></i>
        <p>orem ipsumL orem Ipsum available, but the majority have suffered </p>
        </div>
        <div className='head-office'>
        <i class="fa-regular fa-clock"></i>
        <p>orem ipsumL orem Ipsum available, but the majority have suffered </p>
        </div>
        <div className='head-office'>
        <i class="fa-solid fa-train-tram"></i>
        <p>orem ipsumL orem Ipsum available, but the majority have suffered </p>
        </div>
        </div>

    </div>
  )
}

export default Footer