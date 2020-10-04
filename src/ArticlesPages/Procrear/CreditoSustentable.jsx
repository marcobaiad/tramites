import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function CreditoComMat() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return (
        <MainDiv page={
            <>
                <Helmet description="Esta es una guía rápida para conocer cuales son los requisitos para acceder al crédito de Sustentabilidade del ProCreAr en 2020. Entrá ahora" contextUrl="index" title="ProCreAr Eficiencia Energética ¿Cómo acceder al crédito de sustentabilidad en 2020" />
                <h1 className="text-center">Crédito Sustentable para Incremento de la eficiencia Energética ProCreAr</h1>
                {/* <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como acceder al del ProCreAr en 2020.</p>
                    <div className="card-body">
                        <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>A quien le corresponde</li>
                            <li>Requisitos</li>
                            <li>Como realizar el trámite</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div> */}
                El objetivo del <strong>crédito de sustentabilidad</strong> o <strong>incremento de la eficiencia energética</strong> es brindar la posibilitad de realizar intervenciones en la vivienda para mejorar la eficiencia energética. <br />
                <div class="alert alert-info Bborder-primary my-2" role="alert">
                    <strong>¡Atencion!</strong> Este crédito aún no está disponible.
                </div>
                <br/>
                Podés consultar más en la página oficial desde el siguiente botón <br/>
                <a href="https://www.argentina.gob.ar/habitat/procrear/mejoramientos-sustentables" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Crédito Sustentable</a>
            </>
        } />
    )
}