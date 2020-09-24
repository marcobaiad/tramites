import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function TituloAutomotor() {
    return(
        <MainDiv page={
            <>
                <Helmet description="" contextUrl="noindex" title="Titulo Automotor" />
                <h5>Sección en Mantenimiento</h5>
            </>

        }/>
    )
}