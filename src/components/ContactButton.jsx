import React, { lazy, Suspense } from 'react'
import './ContactButton.css'

const Butterfly = lazy(() =>
  Promise.all([
    import('lottie-react'),
    import('../assets/animations/butterfly.json'),
  ]).then(([lottieModule, animationModule]) => {
    const LottieComponent = lottieModule.default
    return {
      default: (props) => (
        <LottieComponent
          animationData={animationModule.default}
          {...props}
        />
      ),
    }
  })
)

export default function ContactButton({ onClick, className = '' }) {
  return (
    <div className={`contact-button-wrapper ${className}`} onClick={onClick}>
      <div className="contact-label">Contact me</div>

      <Suspense fallback={<div className="butterfly-animation" />}>
        <Butterfly loop={true} className="butterfly-animation" />
      </Suspense>
    </div>
  )
}

