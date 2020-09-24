import React from 'react';

export default function SeccionHome(props) {
    
    const {titleSeccion, firstText, id, entradas } = props

    return(
        <section id={id} className="my-3">
            <h2>{titleSeccion}</h2>
            <p>{firstText}</p>
            <div className="row mx-0 flex-wrap justify-content-start">
                {entradas}
            </div>
        </section>
    )
}
