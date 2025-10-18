import React, { useState } from 'react'
import './Header.css'

export default function Header({ onOpenContactform }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }
  return (
    <>
      <header className="site-header">
        {/* Логотип слева */}
        <a href="#home" className="logo">
          I.Harita
        </a>

        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`burger-letter ${isOpen ? 'open' : ''}`}>I</span>
          <span className={`burger-letter ${!isOpen ? 'open' : ''}`}>H</span>
        </button>
      </header>

      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <nav className="menu-overlay">
          <button onClick={() => handleScroll('about')}>About Me</button>
          <button onClick={() => handleScroll('works')}>Portfolio</button>

          <button
            className="contact-menu-button"
            onClick={() => {
              setIsOpen(false)
              if (onOpenContactform) onOpenContactform()
            }}
          >
            Get in Touch
          </button>
        </nav>
      </div>
    </>
  )
}
