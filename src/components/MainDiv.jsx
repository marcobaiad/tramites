import React from 'react';

export default function MainDiv(props) {
    const {page} = props
    return(
        <div className="container shadow-lg px-md-5 my-2 py-3">
            {page}
        </div>
    ) 
};

