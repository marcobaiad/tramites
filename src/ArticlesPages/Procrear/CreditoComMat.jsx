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
                <Helmet description="Esta es una guía completa para conocer los requisitos y como realizar el trámite para acceder al ProcreAr Compra en 2020 Enterate como en tramitero.com" contextUrl="index, follow" title="ProCreAr Compra de Materiales 2020 ¿Cómo inscribirse?" />
                <h1 className="text-center">Crédito para la compra de Materiales</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como acceder al crédito Procrear Compra en 2020.</p>
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
                El objetivo del Crédito ProCreAr Compra, es posibilitar adquirir materiales para el mejoramiento de las condiciones habitacionales de las viviendas. <br />
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                    <Indice
                        description1="Ejemplos para aplicar"
                        description2="¿Cuales son los requisitos?"
                        description3="¿Cómo realizar el trámite?"
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                Ejemplos para aplicar a este crédito:
                <div ref={titulo1} classname="d-flex flex-row mx-0 justify-content-center">
                    <table className="table table-hover border  my-3">
                        <thead className="table-info">
                            <tr className="text-center">
                                <th>Soluciones</th>
                                <th>Materiales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr classname="text-center">
                                <th scope="row">Filtración de Agua y Aire</th>
                                <td>Lana de Vidrio, chapas, placa de yeso, pintura</td>
                            </tr>
                            <tr classname="text-center">
                                <th scope="row">Terminación de Paredes</th>
                                <td>Revestimientos, pintura, sellados</td>
                            </tr>
                            <tr classname="text-center">
                                <th scope="row">Reemplazo de Carpinterías</th>
                                <td>Nuevo marco y sellado</td>
                            </tr>
                            <tr classname="text-center">
                                <th scope="row">Recambio de instalación Elécrica</th>
                                <td>Lamparas LED, reemplazo de cableados</td>
                            </tr>
                            <tr classname="text-center">
                                <th scope="row">Terminaciones sobre contrapiso existente</th>
                                <td>Carpeta de nivelación, ceramicos.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 ref={titulo2}>¿Cuales son los requisitos para acceder a este crédito?</h2>
                <ul className="my-2">
                    <li>Ser Argentino/a o extranjero/a con residencia permanente (se requieren más de 3 años).</li>
                    <li>DNI</li>
                    <li>Ser trabajador registrado</li>
                    <li>Al momento de la inscripción el grupo familiar deberá sumar un ingreso entre 1,5 y 8 unidades de Salario Minimo Vital y Movil. ($25.312,5 a $135.000 aprox)</li>
                    <li>Ser mayor de 18 años como mínimo y 68 como máximo.</li>
                    <li>Tener un perfil creditício en los últimos 12 meses. No encontrarse inhibido.</li>
                    <li>Registrar sit 1-Normal en información financiera del BCRA en los últimos 12 meses.</li>
                    <li>Ser dueño o alquilar un inmueble que cuente con algún tipo de déficit cualitativo.</li>
                </ul>
                <h2 ref={titulo3}>¿Cómo iniciar el trámite?</h2>
                Para iniciar el trámite se debe llenar el <a href="https://extranet.hipotecario.com.ar/ProCreAr/MejoramientoMateriales/datos-iniciales" target="_blank" rel="noopener noreferrer">formulario de inscripción</a>, se podrá incluir un/ cotitular, en caso de participantes con estado civil "cazado/a" el/la conyuge será registrado/a automaticamente como cotitular. <br/>
                El cotitular deberá acreditar unión por alguo de los siguientes vinculos:
                <ul>
                    <li>Matrimonio</li>
                    <li>Unición convivencial</li>
                    <li>Unión de hecho, (debe coincidir el domicilio de ambos).</li>
                </ul>
            </>
        } />
    )
}