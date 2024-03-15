import React from 'react'
import klevilogoLight from '../assets/images/klevilogoLight.png'
import './LogoSection.css'

function LogoSection() {
  return (
    <>
    <div className='logo-container'>
    <div className='logo-text'>
    <h1 className='text-h1'>Eleva tu negocio con soluciones de software</h1>
    <p className='text-p'>En Klevisoft nos centramos en personalizar cada solucion, garantizando que se alinee con la vision unica de tu empresa y sus objetivosa largo plazo</p>
    </div>
    <div className='logo-image-home'>
    <img src={klevilogoLight}/>
    </div>
    </div>
    </>
    
    
  )
}

export default LogoSection