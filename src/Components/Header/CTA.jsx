import React from 'react'
import CV from '../../Assets/CvSLAHA.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's connect</a>
    </div>
  )
}

export default CTA