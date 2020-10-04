import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function CreditoConstruccion() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return (
        <MainDiv page={
            <>
                <Helmet description="¿Cómo acceder al crédito para construcción de Viviendas ProCrear 2020? Encontrá todo lo referido al ProCreAr en tramitero.com y solicitá tu préstamo ahora." contextUrl="index" title=" ProCreAR Construcción Inscripción 2020 ¿Como acceder a éste crédito?" />
                <h1 className="text-center">Crédito para la Construcción de Vivienda ProCreAr 2020</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como acceder al crédito ProCreAr para la construcción de viviendas en 2020.</p>
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
                El objetivo del <strong>crédito ProCreAr Construcción</strong> es la posibilitar la la construcción de viviendas nuevas de hasta 60 m², también es otorgado en casos en los que las obras de viviendas no superen el 70% de la obra final. <br/>
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                    <Indice
                        description1="¿Cuáles son los requisitos?"
                        description2="¿Cuál es el monto y el plazo?"
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
                <div className="my-2">
                    <div className="card my-2 border-info">
                        <div className="card-header font-weight-bold bg-primary text-white">
                            Detalles del Prestamo
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Monto $3.500.000</li>
                                <li>Plazo 360 meses</li>
                                <li>Tasa fija HogAr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <table className="table table-hover border my-3">
                    <thead className="table-info">
                        <tr className="text-center">
                            <th>Cantidad</th>
                            <th>Tipo de Solución</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <th scope="row">10.000</th>
                            <td>Construcción con lote propio</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">10.000</th>
                            <td>Construcción con lote Procrear (no disponible aún)</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">10.000</th>
                            <td>Construcción con lotes municipales</td>
                        </tr>
                    </tbody>
                </table>
                <h2 ref={titulo3}>¿Cómo iniciar el trámite?</h2>
                Para iniciar el trámite se debe llenar el formulario correspondiente a tu situación:
                <ul className="my-2">
                    <li><a className="btn btn-primary my-2" href="https://www.argentina.gob.ar/habitat/procrear/linea-construccion/construccion-con-lote-propio" target="_blank" rel="noopener noreferrer">Con Lote Propio</a></li>
                    <li><a className="btn btn-primary my-2" href="https://www.argentina.gob.ar/habitat/procrear/linea-construccion/construccion-con-lote-propio" target="_blank" rel="noopener noreferrer">Con Lote Municipal</a></li>
                    <li><a className="btn btn-primary my-2" href="https://www.argentina.gob.ar/habitat/procrear/linea-construccion/construccion-con-lote-municipal" target="_blank" rel="noopener noreferrer">Con Lote Procrear</a></li>
                </ul>
            </>
        } />
    )
}