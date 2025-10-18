import React, { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const colors = [
      '#FDD6E0',
      '#D8B4FF',
      '#FFC8A2',
      '#B0E0E6',
      '#E0FFE0',
      '#FFDDE0',
      '#C8A2FF',
      '#FFC8A2',
      '#A0E0FF',
      '#D0FFE0',
    ]
    const shapes = [
      { width: 40, height: 40 },
      { width: 65, height: 45 },
      { width: 15, height: 15 },
      { width: 30, height: 35 },
      { width: 85, height: 55 },
      { width: 100, height: 45 },
      { width: 80, height: 80 },
      { width: 25, height: 5 },
      { width: 150, height: 75 },
    ]

    const interval = setInterval(() => {
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      const color = colors[Math.floor(Math.random() * colors.length)]
      const newBubble = {
        id: Date.now() + Math.random(),
        width: shape.width,
        height: shape.height,
        color,
        top: Math.random() * 60 + 20 + '%',
      }
      setBubbles((prev) => [...prev, newBubble])

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id))
      }, 8000)
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero-container">
      <div className="hero-left">
        <h1 className="hero-line">Hi! My name is Irina Harita.</h1>
        <p className="hero-block">
          I am a frontend developer. I create modern, user-friendly web
          applications, combining functionality with beautiful interfaces. I
          work with HTML, CSS, JavaScript, and React to deliver high-quality,
          maintainable code.
        </p>
      </div>

      <div className="bubbles-container">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              width: `${b.width}px`,
              height: `${b.height}px`,
              backgroundColor: b.color,
              top: b.top,
            }}
          />
        ))}
      </div>
    </section>
  )
}
