import React from 'react';

export default function SeccionHome(props) {
    
    const { id, entradas } = props

    return(
        <div key={id} id={id} className="my-3">
            <div className="row mx-0 flex-wrap justify-content-start">
                {entradas}
            </div>
        </div>
    )
}
