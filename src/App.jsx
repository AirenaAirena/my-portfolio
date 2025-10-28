import React, { useState } from 'react'

import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Works from './components/Works'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const works = [
    {
      title: 'Projekt 1',
      description: 'About 1',
      // img: 'https://via.placeholder.com/600x400',
      link: 'https://example.com/project1',
    },
    {
      title: 'Projekt 2',
      description: 'About 2',
      // img: 'https://via.placeholder.com/600x400',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projekt 3',
      description: 'About 3',
      // img: 'https://via.placeholder.com/600x400',
      link: 'https://example.com/project3',
    },
    {
      title: 'Projekt 4',
      description: 'About 3',
      // img: 'https://via.placeholder.com/600x400',
      link: 'https://example.com/project3',
    },
  ]

  return (
    <div className="app-container">
      <Header onOpenContactform={() => setIsFormOpen(true)} />
      {/* Hero  */}
      <Hero />

      <About />
      {/* </section> */}

      <Works works={works} />

      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      {/* Footer */}

      <Footer onContactClick={() => setIsFormOpen(true)} />
    </div>
  )
}

export default App
