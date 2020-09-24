import React from 'react';
import { Link } from 'react-router-dom';

export default function Links(props) {
    const { pathPost, text, func, colorText, key } = props

    return (
        <Link key={key} className={`dropdown-item ${colorText} font-weight-bold`} onClick={func} to={pathPost} >{text}</Link>
    )
}