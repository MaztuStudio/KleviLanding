import React from 'react'
import './Grid.css'
import Cards from './Cards'

function Grid() {
    return (
        <>
        
            <div className='grid-wrapper'>
                <div className="grid-container">
                    <div className="card-container">
                        <Cards
                            title="Desarrollo a la medida"
                            text="Nuestros productos de software se
                            ajustan a los requerimientos de tu
                            empresa sin importar el tamafio."
                        />
                    </div>
                    <div className="divisor" />
                    <div className="card-container">

                        <Cards
                            title="Formacion Dinamica"
                            text="Nuestros productos de software se
                            ajustan a los requerimientos de tu
                            empresa sin importar el tamafio.
                            "
                        />
                    </div>
                    <div className="divisor" />
                    <div className="card-container">

                        <Cards
                            title="Vision Estrategica"
                            text="Nuestros productos de software se
                                ajustan a los requerimientos de tu
                                empresa sin importar el tamafio.
                                "
                        /></div>
                </div>
            </div>
        </>
    )
}

export default Grid