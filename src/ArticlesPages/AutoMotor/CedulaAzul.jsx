import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function CedulaAzul() {
    return(
        <MainDiv page={
            <>
                <Helmet description="" contextUrl="noindex" title="Cedula Azul" />
                <h5>Sección en Mantenimiento</h5>
            </>

        }/>
    )
}