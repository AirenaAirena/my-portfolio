import React from 'react'
import Lottie from 'lottie-react'
import butterflyAnimation from '../assets/animations/butterfly.json'

export default function Butterfly() {
  return <Lottie animationData={butterflyAnimation} loop={true} />
}
