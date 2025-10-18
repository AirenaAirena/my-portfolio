import React from 'react'
import './ContactForm.css'

export default function FeatherButton({ disabled }) {
  return (
    <button type="submit" className="feather-btn" disabled={disabled}>
      🪶 Send
    </button>
  )
}
