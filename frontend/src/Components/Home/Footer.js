import React from 'react'
import '../../CSS/Home.css'
const Footer = () => {
  return (
    <div>
      <footer className='fixed-bottom bg-white p-2'>
        <p className='text-center'>© 2024 Homely Hub.All Rights Reserved</p>
        <ul className='footerlist'>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemaps</li>
          <li>Company Details</li>
        </ul>
        <p>English(IN) ₹ INR</p>
      </footer>
    </div>
  )
}

export default Footer;