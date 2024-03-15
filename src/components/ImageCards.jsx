import React from 'react'
import './Cards.css'


function ImageCards({src, text, textStyle=""}) {
  return (
  <>
      <div className='card-container'>
        <img src={src} className='card-image'/>
        <p className={`card-text-background${textStyle}`}>{text}</p>
      </div>
      </>
  );
}

export default ImageCards