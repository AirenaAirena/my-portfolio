import React from 'react'
import './Footer.css'
import ContactButton from './ContactButton'

export default function Footer({ onContactClick }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-column">
            <a href="#top">Top</a>
            <a href="#about">About</a>
            <a href="#works">Works</a>
          </div>
          <div className="footer-column">
            <a
              href="https://github.com/AirenaAirena"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/iryna-kovalova-a6649b280/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-butterfly">
          <ContactButton
            onClick={onContactClick}
            className="footer-butterfly-small"
          />
        </div>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} Iryna Harita. All rights reserved.
      </div>
    </footer>
  )
}
