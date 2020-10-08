import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function CreditoAmpliacion() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return (
        <MainDiv page={
            <>
                <Helmet description="Esta es una guía completa para acceder al crédito del Procrear Ampliación 2020 con los requisitos, montos y cuotas. Entrá ahora y enterate todo." contextUrl="index, follow" title="ProCreAr Ampliacion 2020 ¿Cuales son los requisitos?" />
                <h1 className="text-center">Crédito para Ampliación de Viviendas ProCreAr 2020</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como acceder al crédito ProCreAr para Ampliación de viviendas en 2020.</p>
                    <div className="card-body">
                        <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>A quien le corresponde</li>
                            <li>Requisitos</li>
                            <li>Como realizar el trámite</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                El objetivo del crédito <strong>Procrear Ampliación</strong> es la posibilitar la ampliación de la vivienda en no más de 30 m² y la superficie total de la misma no puede superar los 90 m². <br/>
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                    <Indice
                        description1="¿Cuales son los requisitos?"
                        description2="¿Cuales son los montos y cuotas?"
                        description3="¿Cómo realizar el trámite?"
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h2 ref={titulo1}>¿Cuales son los requisitos para acceder a este crédito?</h2>
                <ul className="my-2">
                    <li>Ser Argentino/a o extranjero/a con residencia permanente (se requieren más de 3 años).</li>
                    <li>DNI</li>
                    <li>Ser trabajador registrado</li>
                    <li>Al momento de la inscripción el grupo familiar deberá sumar un ingreso entre 2 y 8 unidades de Salario Minimo Vital y Movil. ($25.312,5 a $135.000 aprox)</li>
                    <li>Ser mayor de 18 años como mínimo y 64 como máximo.</li>
                    <li>Tener un perfil creditício en los últimos 12 meses. No encontrarse inhibido.</li>
                    <li>Registrar sit 1-Normal en información financiera del BCRA en los últimos 12 meses.</li>
                    <li>Ser dueño de un inmueble que permita la ampliación del mismo. La superficie no puede superar los 60 metros cuadrados y la ampliación proyectada no podrá superar los 90 metros cuadrados.</li>
                    <li>Tanto el/la titular como el/la cotitular no podrán ser dueños de ningún bien inmueble alguno.</li>
                    <li>Registrar 12 meses de antigüedad como activo.</li>
                </ul>
                <h2 ref={titulo2}>Monto y plazo de devolución</h2>
                Este crédito se otorga a todo el pais: <br/>
                <div className="row justify-content-center mx-0">
                    <div className="card my-2 border-info">
                        <div className="card-header bg-primary font-weight-bold text-white">
                            Monto para todo el País
                        </div>
                        <div className="card-body">
                            <p>Monto $1.500.000</p>
                            <p>Plazo 180 meses</p>
                            <p>Tasa fija HogAr</p>
                        </div>
                    </div>
                </div>
                <h2 ref={titulo3}>¿Cómo iniciar el trámite?</h2>
                Para iniciar el trámite se debe llenar el <a href="https://extranet.hipotecario.com.ar/procrear/Ampliacion/datos-iniciales" target="_blank" rel="noopener noreferrer">formulario de inscripción</a>, se podrá incluir un/ cotitular, en caso de participantes con estado civil "cazado/a" el/la conyuge será registrado/a automaticamente como cotitular. <br/>
                El cotitular deberá acreditar unión por alguo de los siguientes vinculos:
                <ul className="my-2">
                    <li>Matrimonio</li>
                    <li>Unición convivencial</li>
                    <li>Unión de hecho, (debe coincidir el domicilio de ambos).</li>
                </ul>
            </>
        } />
    )
}