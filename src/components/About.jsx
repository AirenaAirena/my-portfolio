import React, { useState } from 'react'
import ContactButton from './ContactButton'
import ContactForm from './ContactForm'

import './About.css'

export default function About() {
  const [showForm, setShowForm] = useState(false)

  const handleContactClick = () => {
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <p>
          Laziness is the engine of progress. I love intuitive websites and
          interfaces where you don’t need to play quests or guess where
          something is.
        </p>
        <p>
          I focus on clean, simple, and functional design that is easy for users
          to navigate.
        </p>
      </div>

      <div className="about-animation">
        <ContactButton onClick={handleContactClick} />
        {showForm && <ContactForm onClose={handleCloseForm} />}
      </div>
    </section>
  )
}
