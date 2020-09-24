import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function TurnoAutomotor() {
    return(
        <MainDiv page={
            <>
                <Helmet description="" contextUrl="noindex" title="Turno Automotor" />
                <h5>Sección en Mantenimiento</h5>
            </>
        }/>
    )
}