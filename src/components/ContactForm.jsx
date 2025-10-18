import React, { useState } from 'react'
import './ContactForm.css'
import FeatherButton from './FeatherButton'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanpbddr'

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    hp: '',
  })
  const [errors, setErrors] = useState({})

  const [isSent, setIsSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.hp) return

    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Please enter a valid email address'
    if (!formData.message.trim())
      newErrors.message = 'Please enter your message'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSent(true)
        setLoading(false)
        setTimeout(() => onClose(), 2500)
      } else {
        const data = await response.json().catch(() => ({}))
        setError(data.error || 'Form submission error. Please try again later')
        setLoading(false)
      }
    } catch (err) {
      console.error('Form send error:', err)
      setError('Connection error. Please check your internet')
      setLoading(false)
    }
  }

  return (
    <div className="form-overlay" onClick={onClose}>
      <form
        className="contact-form glass"
        onSubmit={handleSubmit}
        noValidate
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="close-btn" onClick={onClose}>
          ✖
        </button>

        {!isSent ? (
          <>
            <h2>Contact Me</h2>

            <div className="input-card" style={{ animationDelay: '0.1s' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                required
              />
              {errors.name && <div className="error-text">{errors.name}</div>}
            </div>

            <div className="input-card" style={{ animationDelay: '0.3s' }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                required
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>

            <div className="input-card" style={{ animationDelay: '0.5s' }}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                required
              ></textarea>
              {errors.message && (
                <div className="error-text">{errors.message}</div>
              )}
            </div>

            <input
              type="text"
              name="hp"
              style={{ display: 'none' }}
              value={formData.hp}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
            />

            <div className="links" style={{ animationDelay: '0.7s' }}>
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

            {error && <div className="form-error">{error}</div>}

            <FeatherButton disabled={loading} />
          </>
        ) : (
          <div className="sent-message">Your message has been sent!</div>
        )}
      </form>
    </div>
  )
}
