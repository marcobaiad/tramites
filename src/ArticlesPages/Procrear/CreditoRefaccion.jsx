import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function CreditoComMat() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <MainDiv page={
            <>
                <Helmet description="Esta es una guía completa de como acceder al crédito ProCreAr para refacciones de la vivienda en 2020. Encontrá toda la info en tramitero.com" contextUrl="index, follow" title="ProCrear Refacción 2020 ¿Cómo acceder al crédito para Refacciones?" />
                <h1 className="text-center">Crédito para Refacciones de la vivienda ProCreAr</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre el ProCreAr Refaccion 2020 Inscripcion.</p>
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
                El objetivo de este crédito es posibilitar mejorar/refaccionar las condiciones de las viviendas. <br />
                Ejemplos para aplicar a este crédito:
                <div classname="d-flex flex-row mx-0 justify-content-center">
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
                                <td>Chapa, lana de birdrio, placa de yeso, pintura.</td>
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
                                <th scope="row">Recambio de instalación Elécrica y artefactos</th>
                                <td>Lamparas LED, reemplazo de cableados</td>
                            </tr>
                            <tr classname="text-center">
                                <th scope="row">Terminaciones sobre contrapiso existente</th>
                                <td>Carpeta de nivelación, cerámicos.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                    <Indice
                        description1="¿Cuales son los requisitos?"
                        description2="Montos y cuotas"
                        description3="¿Cómo iniciar el trámite?"
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
                    <li>Al momento de la inscripción el grupo familiar deberá sumar un ingreso entre 1,5 y 8 unidades de Salario Minimo Vital y Movil. ($25.312,5 a $135.000 aprox)</li>
                    <li>Ser mayor de 18 años como mínimo y 68 como máximo.</li>
                    <li>Tener un perfil creditício en los últimos 12 meses. No encontrarse inhibido.</li>
                    <li>Registrar sit 1-Normal en información financiera del BCRA en los últimos 12 meses.</li>
                    <li>Ser dueño o alquilar un inmueble que cuente con algún tipo de déficit cualitativo.</li>
                </ul>
                <h2 ref={titulo2}>¿Cuáles son los montos y plazos de devolución?</h2>
                Este crédito otorga 3 montos diferentes dependiendo de tus necesidades: <br/>
                <div className="row justify-content-center mx-0 my-3">
                    <div className="card mx-2 my-2 border-info">
                        <div className="card-header bg-info font-weight-bold text-white">
                            1° Monto y Plazo
                        </div>
                        <div className="card-body">
                            <p>Línea de <strong>$100.000</strong></p>
                            <p>Monto de cuota $2698</p>
                            <p>Plazo 120 meses</p>
                        </div>
                    </div>
                    <div className="card mx-2 my-2 border-info">
                        <div className="card-header bg-info font-weight-bold text-white">
                            2° Monto y Plazo
                        </div>
                        <div className="card-body">
                            <p>Línea de <strong>$250.000</strong></p>
                            <p>Monto de cuota $6746</p>
                            <p>Plazo 120 meses</p>
                        </div>
                    </div>
                    <div className="card mx-2 my-2 border-info">
                        <div className="card-header bg-info font-weight-bold text-white">
                            3°Monto y Plazo
                        </div>
                        <div className="card-body">
                            <p>Línea de <strong>$500.000</strong></p>
                            <p>Monto de cuota $12738</p>
                            <p>Plazo 180 meses</p>
                        </div>
                    </div>
                </div>
                <h2 ref={titulo3}>¿Cómo iniciar el trámite?</h2>
                Para iniciar el trámite se debe llenar el formulario según el monto a solicitar <br/>
                <ul className="my-2">
                    <li><a className="btn btn-primary my-2" href="https://extranet.hipotecario.com.ar/procrear/MejoramientoRefaccion1/datos-iniciales" target="_blank" rel="noopener noreferrer">Inscripción $100.000</a></li>
                    <li><a className="btn btn-primary my-2" href="https://extranet.hipotecario.com.ar/procrear/MejoramientoRefaccion2/datos-iniciales" target="_blank" rel="noopener noreferrer">Inscripción $250.000</a></li>
                    <li><a className="btn btn-primary my-2" href="https://extranet.hipotecario.com.ar/procrear/MejoramientoRefaccion3/datos-iniciales" target="_blank" rel="noopener noreferrer">Inscripción $500.000</a></li>
                </ul>
                Debés tener en cuenta que podrás incluir un/ cotitular. En caso de participantes con estado civil "cazado/a" el/la conyuge será registrado/a automaticamente como cotitular. <br/>
                El cotitular deberá acreditar unión por alguo de los siguientes vinculos:
                <ul className="my-3">
                    <li>Matrimonio</li>
                    <li>Unición convivencial</li>
                    <li>Unión de hecho, (debe coincidir el domicilio de ambos).</li>
                </ul>
            </>
        } />
    )
}