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
      title: 'UrbanNest',
      description:
        'Responsive apartment search landing page with filtering and modal components.',
    
      link: ' https://airenaairena.github.io/portfolio-LP/',
    },
<<<<<<< HEAD

    {
      title: 'Pflanzen Finder',
      description:
        'Mobile-first plant identifier app. Scan a plant with camera and get name, family, genus and description. Built with React and two APIs — Plant.id and Perenual.',
      img: '/pflanzen.png',
      link: 'https://airenaairena.github.io/Pflanzen-finder/',
=======
    
      {
  title: 'Pflanzen Finder',
  description: 'Mobile-first plant identifier app. Scan a plant with camera and get name, family, genus and description. Built with React and two APIs — Plant.id and Perenual.',
  link: 'https://github.com/AirenaAirena/Pflanzen-finder',

>>>>>>> e7dae1fcbb5c1f793408e21816a5b38a734aad9c
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
