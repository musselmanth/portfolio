import { useState, useEffect } from 'react';
import './NavBar.css'
import headshot from '../assets/headshot.jpeg'
import {NavLink} from 'react-router-dom'


const NavBar = ({isMobileSize, isScrolled}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => setIsMenuVisible(currentIsMenuVisible => !currentIsMenuVisible)

  const navClear = () => {
    setIsMenuVisible(false)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    setIsMenuVisible(false);
  }, [isMobileSize])

  return (
    <>
      <div className={`navbar ${(isScrolled && !isMobileSize) && "scrolled"}`}>
        <div className="nav-1">
          <div className="left">
            <NavLink to="/" onClick={navClear}>
              <div className="pic-and-title">
                <img src={headshot} alt="Tom Musselman Headshot" className={`headshot ${isScrolled && "scrolled"}`} />
                <div className="title">
                  <div className="name">Tom Musselman</div>
                  <div className={`role ${isScrolled && "scrolled"}`}><em>Software Engineer</em></div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className={`menu-btn ${isMenuVisible && "close"}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>
        {!isMobileSize && 
          <div className="nav-2">
            <nav className="nav-container">
              <NavLink id="btn-1" className={`nav-btn red-top ${isScrolled && "scrolled"}`} to="/" onClick={navClear}>About Me</NavLink>
              <NavLink id="btn-1" className={`nav-btn yellow-top ${isScrolled && "scrolled"}`} to="/portfolio" onClick={navClear}>Portfolio</NavLink>
              <NavLink id="btn-1" className={`nav-btn green-top ${isScrolled && "scrolled"}`} to="/blog" onClick={navClear}>Blog</NavLink>
              <NavLink id="btn-1" className={`nav-btn blue-top ${isScrolled && "scrolled"}`} to="/resume" onClick={navClear}>Resumé</NavLink>
            </nav>
            <div className={`social-container ${isScrolled && "scrolled"}`}>
              <div className="social-btn"><a href="https://www.github.com/musselmanth"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a></div>
              <div className="social-btn"><a href="https://www.linkedin.com/in/tmussel"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div>
            </div>
          </div> 
        }
      </div>
      {isMobileSize && 
        <div className={`nav-2 ${isMenuVisible && "visible"}`}>
          <nav className="nav-container">
            <NavLink id="btn-1" className="nav-btn red-rgt" to="/" onClick={navClear}>About Me</NavLink>
            <NavLink id="btn-1" className="nav-btn yellow-rgt" to="/portfolio" onClick={navClear}>Portfolio</NavLink>
            <NavLink id="btn-1" className="nav-btn green-rgt" to="/blog" onClick={navClear}>Blog</NavLink>
            <NavLink id="btn-1" className="nav-btn blue-rgt" to="/resume" onClick={navClear}>Resumé</NavLink>
          </nav>
          <div className="social-container">
            <div className="social-btn"><a href="https://www.github.com/musselmanth"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a></div>
            <div className="social-btn"><a href="https://www.linkedin.com/in/tmussel"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div>
          </div>
        </div>
      }
    </>
  )
}

export default NavBar