import React from 'react';
import { Link } from 'react-router-dom';

function Relacionados(props) {
    const { tituloRel1, tituloRel2, tituloRel3, tituloRel4, textRel1, textRel2, textRel3, textRel4, pathToRel1, pathToRel2, pathToRel3, pathToRel4 } = props;

    const ArtRel = (props) => {

        const { tituloRel, textRel, pathToRel } = props

        return(
            <article className="card mx-2 my-2 border-info">
                <Link className="text-decoration-none text-dark" target="_blank" to={pathToRel} >
                    <div class="card-body">
                        <h4 class="card-title">{tituloRel}</h4>
                        <p class="card-text">{textRel}</p>
                    </div>
                </Link>
            </article>
        )
    }
    return (
        <>
            { tituloRel1 && <ArtRel tituloRel={tituloRel1} textRel={textRel1} pathToRel={pathToRel1} />}
            { tituloRel2 && <ArtRel tituloRel={tituloRel2} textRel={textRel2} pathToRel={pathToRel2} />}
            { tituloRel3 && <ArtRel tituloRel={tituloRel3} textRel={textRel3} pathToRel={pathToRel3} />}
            { tituloRel4 && <ArtRel tituloRel={tituloRel4} textRel={textRel4} pathToRel={pathToRel4} />}
        </>
    );
}

export default Relacionados;