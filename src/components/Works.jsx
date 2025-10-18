import React, { useRef, useEffect, useState } from 'react'
import './Works.css'

export default function Works({ works }) {
  const sectionRef = useRef(null)
  const [sectionHeight, setSectionHeight] = useState('auto')

  useEffect(() => {
    const cardHeight = 400
    const gap = 100
    const topOffset = 100
    setSectionHeight(topOffset + works.length * (cardHeight + gap) - gap)
  }, [works])

  return (
    <section
      id="works"
      ref={sectionRef}
      className="works-section"
      style={{ height: sectionHeight }}
    >
      {works.map((work, index) => (
        <div className="work-card" key={index} style={{ zIndex: index + 1 }}>
          <div className="work-content">
            <h3>{work.title}</h3>
            {work.img && <img src={work.img} alt={work.title} />}
            {work.description && <p>{work.description}</p>}
            {work.link && (
              <a href={work.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
