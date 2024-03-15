import React from 'react'
import './Grid.css'
import ImageCards from './ImageCards'
import phone from '../assets/images/phone.png'
import laptop from '../assets/images/laptop.png'
import printer from '../assets/images/printer.png'

function ImageGrid() {
    return (
        <>
        
            <div className='grid-wrapper'>
                <div className="image-grid-container">
                    <div className="card-container">
                        <ImageCards
                            src={phone}
                            text="Movil"
                        />
                    </div>
                    <div className="card-container">

                        <ImageCards
                            src={laptop}
                            text="Web
                            "
                        />
                    </div>
                    <div className="card-container">

                        <ImageCards
                            src={printer}
                            text="Hardware.
                                "
                        /></div>
                </div>
            </div>
        </>
    )
}

export default ImageGrid