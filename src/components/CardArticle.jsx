import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/CardArticle.css';

export default function CardArticle(props) { 
    return(
        <article className="card cards mt-3 mx-1 px-0 bg-dark overflow-auto" key={props.CardArticlesData.id}>
            <Link to={`${props.CardArticlesData.pathPost}`} className="text-decoration-none">
            <div className="card-body text-white">
                <h5 className="card-title">{props.CardArticlesData.titleCard}</h5>
                <p className="card-text text-break">{props.CardArticlesData.textCard}</p>
            </div>
            </Link>
        </article>
    )
}
