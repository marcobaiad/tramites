import React from 'react';
import CardArticle from './CardArticle';

export default function SeccionHome(props) {
    
    const {titleSeccion, firstText, id, titleCard } = props
    
    return(
        <section id={id}>
            <h2>{titleSeccion}</h2>
            <p>{firstText}</p>
            <div className="row mx-0 flex-wrap justify-content-around">
                
            </div>
        </section>
    )
}
