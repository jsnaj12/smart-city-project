import React from 'react'
import BannerImage from "../assets/anga.jpg";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
      
      </div>
    </div>
  )
}

export default Home