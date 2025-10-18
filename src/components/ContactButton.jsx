import React from 'react'
import './ContactButton.css'
import Lottie from 'lottie-react'
import butterflyAnimation from '../assets/animations/butterfly.json'

export default function ContactButton({ onClick, className = '' }) {
  return (
    <div className={`contact-button-wrapper ${className}`} onClick={onClick}>
      <div className="contact-label">Contact me</div>

      <Lottie
        animationData={butterflyAnimation}
        loop={true}
        className="butterfly-animation"
      />
    </div>
  )
}
