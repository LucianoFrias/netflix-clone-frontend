import React, { useEffect, useState } from 'react'
import NetflixLogo from '../../img/netflix-logo.png'
import './Navbar.css'

function Navbar() {

  const [showNav, handleShowNav] = useState(false);

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);


    if (element)
    {
      element.scrollIntoView({behavior: 'smooth'});
    }

}

  useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100)
        {
          handleShowNav(true);
        }
        else handleShowNav(false);
      })
  }, []);


  return (
    <div className={`navbar ${showNav && "navbar-black"}`}>
        <img
        onClick={() => {scrollToSection("banner")}} 
        src={NetflixLogo}
        className='netflix-logo'
        alt='Netflix Logo'></img>

        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
        className='user-logo'
        alt='User Logo'></img>
    </div>
  )
}

export default Navbar