import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function CreditoComMat() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);

    return (
        <MainDiv page={
            <>
                <Helmet description="Esta es una guía completa de como acceder al crédito ProCreAr para Gas de Red en 2020. Encontrá toda la info relaconada al ProCreAr en tramitero.com" contextUrl="index" title="ProCrear Mejor Hogar Gas Inscripción 2020 ¿Cómo acceder al crédito para Gas de Red?" />
                <h1 className="text-center">Crédito para instalación domiciliaria de Gas ProCreAr</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como acceder al crédito ProCreAr para instalación de Gas de Red en 2020.</p>
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
                El objetivo de este crédito es brindar la posibilidad de acceder al Gas de red y mejorar las condiciones de las viviendas. <br />
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                    <Indice
                        description1="Montos y Plazos de Devolución"
                        description2="Monto Zona Sur"
                        description3="Requisitos para acceder"
                        description4="¿Cuáles son las prestadoras?"
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                        nodo4={titulo4}
                    />
                </Suspense>
                <h2 ref={titulo1}>Montos y plazos de devolución</h2>
                Si bien es un crédito que se otorga a todo el pais, el monto es diferente en caso de vivir en el sur del país: <br/>
                <div className="row justify-content-center mx-0">
                    <div className="card my-2 mx-2">
                        <div className="card-header bg-primary text-white font-weight-bold">
                        Monto y Plazo todo el país
                        </div>
                        <div className="card-body">
                            <p>Línea de $44.500</p>
                            <p>Monto de cuotas (detallado más abajo).</p>
                            <p>Plazo 60 meses</p>
                        </div>
                    </div>
                    <div className="card my-2 mx-2">
                        <div className="card-header bg-primary text-white font-weight-bold">
                            Monto y Plazo región Sur
                        </div>
                        <div className="card-body">
                            <p>Línea de $61.500</p>
                            <p>Monto de cuotas (detallado más abajo)</p>
                            <p>Plazo 60 meses</p>
                        </div>
                    </div>
                </div>
                <h2>Montos y cuotas según zona</h2>
                <strong>Todo el país (excepto regín Sur)</strong>
                <table className="table table-hover border  my-3">
                    <thead className="table-info">
                        <tr className="text-center">
                            <th>Descripción</th>
                            <th>Conexión</th>
                            <th>Cuota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <th scope="row">Interna - conversión</th>
                            <td>$22.500</td>
                            <td>$565</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">Interna - 1 boca</th>
                            <td>$27.000</td>
                            <td>$678</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">Interna - 2 bocas</th>
                            <td>$39.000</td>
                            <td>$979</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">Interna - 3 bocas</th>
                            <td>$44.500</td>
                            <td>$1.117</td>
                        </tr>
                    </tbody>
                </table>
                <strong ref={titulo2}>Montos y cuotas para Región Sur</strong>
                <table className="table table-hover border  my-3">
                    <thead className="table-info">
                        <tr className="text-center">
                            <th>Descripción</th>
                            <th>Conexión</th>
                            <th>Cuota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <th scope="row">Interna - conversión</th>
                            <td>$27.000</td>
                            <td>$678</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">Interna - 1 boca</th>
                            <td>$38.000</td>
                            <td>$954</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">Interna - 2 bocas</th>
                            <td>$53.500</td>
                            <td>$.1343</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">Interna - 3 bocas</th>
                            <td>$61.500</td>
                            <td>$1.544</td>
                        </tr>
                    </tbody>
                </table>
                <h2 ref={titulo3}>¿Cuales son los requisitos para acceder a este crédito?</h2>
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
                <h2 ref={titulo4}>¿Cómo iniciar el trámite?</h2>
                Para iniciar el trámite se debe llenar el formulario según el monto a solicitar <a href="https://extranet.hipotecario.com.ar/ProCreAr/ConexionesGas/datos-iniciales" target="_blank" rel="noopener noreferrer">Inscripción $100.000</a>
                Debés tener en cuenta que podrás incluir un/ cotitular. En caso de participantes con estado civil "cazado/a" el/la conyuge será registrado/a automaticamente como cotitular. <br/>
                El cotitular deberá acreditar unión por alguo de los siguientes vinculos:
                <ul>
                    <li>Matrimonio</li>
                    <li>Unición convivencial</li>
                    <li>Unión de hecho, (debe coincidir el domicilio de ambos).</li>
                </ul>
                <div class="alert alert-info border-primary" role="alert">
                    <strong>Debés tener en cuenta lo siguiente:</strong> En el formulario de inscripción deberás completar el código postal del domicilio donde vas a llevar adelante la obra. Esto con el objetivo de que el sistema informe si existe alguna empresa prestadora habilitada en la región. <br/>
                    <ul className="my-2">
                        <li>El banco que preste el dinero (Banco Hipotecario) será el presponsable de informar a la prestadora quienes son los participantes beneficiados</li>
                        <li>La prestadora informará a los seleccionados quienes son los gasistas matriculados.</li>
                        <li>Los fondos del crédito se depositan en la caja de ahorro del gasista matriculado.</li>
                        <li>El monto de la cuota será incluido en la boleta de servicio de Gas.</li>
                    </ul>
                </div>
                <h3 ref={titulo4}>¿Cuales son las prestadoras de éste programa?</h3>
                <ul className="my-2">
                    <li>Gasnor S.A.</li>
                    <li>Gas NEA.</li>
                    <li>Buenos Aires Gas S.A.</li>
                    <li>MetroGas</li>
                    <li>Naturgy</li>
                    <li>Camuzzi Gas del Sur S.A</li>
                    <li>Camuzzi Gas Pampeana S.A</li>
                    <li>Ecogas Centro</li>
                    <li>Ecogas Cuyana</li>
                </ul>
            </>
        } />
    )
}