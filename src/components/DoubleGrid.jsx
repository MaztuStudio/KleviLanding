import Cards from './Cards'
import React from 'react'

export default function DoubleGrid() {
  return (
    <>
    
        
    <div className='grid-wrapper'>
                <div className="grid-container">
                    <div className="card-container">
                        <Cards
                            title="Software a la medida"
                            text="Nuestros productos de software se
                            ajustan a los requerimientos de tu
                            empresa sin importar el tamafio."
                        />
                        <Cards
                            title="Software a la medida"
                            text="Nuestros productos de software se
                            ajustan a los requerimientos de tu
                            empresa sin importar el tamafio."
                        />
                    </div>
                    
                    <div className="divisor" />
                    <div className="card-container">

                    <Cards
                            title="Soporte Personalizado"
                            text="Nuestros productos de software se
                            ajustan a los requerimientos de tu
                            empresa sin importar el tamafio.
                            "
                        />
                        <Cards
                            title="Soporte Personalizado"
                            text="Nuestros productos de software se
                            ajustan a los requerimientos de tu
                            empresa sin importar el tamafio.
                            "
                        />
                    </div>
                    <div className="divisor" />
                    <div className="card-container">

                    <Cards
                            title="Capacitacion"
                            text="Nuestros productos de software se
                                ajustan a los requerimientos de tu
                                empresa sin importar el tamafio.
                                "
                        />
                        <Cards
                            title="Capacitacion"
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
