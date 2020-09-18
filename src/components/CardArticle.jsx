import React from 'react';
import {Link} from 'react-router-dom';
import '../css/CardArticle.css';

export default function CardArticle(props) {
    
    const {titleCard, textCard, pathlinking} = props
    console.log(props);


    return(
        <article class="card mt-3 mx-1 px-0 bg-dark">
            <Link to={`${pathlinking}`} className="text-decoration-none">
            <div class="card-body text-white">
                <h5 className="card-title">{titleCard}</h5>
                <p class="card-text">{textCard}</p>
            </div>
            </Link>
        </article>
    )
}
