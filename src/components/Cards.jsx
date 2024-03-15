import React from 'react'
import './Cards.css'

function Cards({title, text,titleStyle="", textStyle=""}) {
  return (
  <>
      <div className='card-container'>
        <h1 className={`card-title${titleStyle}`}>{title}</h1>
        <p className={`card-text${textStyle}`}>{text}</p>
      </div>
      </>
  );
}

export default Cards