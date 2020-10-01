import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/indice'));

export default function AUH() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return (
        <MainDiv page={
        <>
            <Helmet description="¿¿Como saber si me corresponde cobrar AUH? En tramitero.com te ayudamos a realizar el trámite de una manera super rápida y sensilla, entrá ahora!" contextUrl="index" title="AHU 2020" />
            <h1 className="my-3 text-center">Asignación Universal por Hijo ANSES</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como cobrar Asignación Universal por Hijo en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>A quien le corresponde</li>
                        <li>Requisitos</li>
                        <li>Como cobrar AHU</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            También conocida por sus siglas como <strong>AUH</strong>, es una asignación mensual que cobra uno solo de los padres (priorizando a la mamá) por hasta 5 hijos menores de 18 años. Para asegurarte de cobrar cada mes, no debés olvidarte de presentar una vez al año la Libreta de cada hijo. <br />
            Esta asignación que otorga el Estado Argentino, tiene la función de de ser un <strong>seguro social</strong> para las personas desocupadas, que trabajan en el circuito informal o cuyos ingresos son menores al salario mínimo, vital y móvil.
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                <Indice 
                    description1="¿Quién cobra Asignación Universal por hijo 2020?" 
                    description2="¿Cuales son los requisitos para acceder?"
                    description3="¿Cómo realizar el trámite para cobrar AHU?"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
               />
            </Suspense>
            <h2 className="my-3" ref={titulo1}>¿Quien cobra Asignación Universal por Hijo?</h2>
            Para poder acceder a la Asignación Universal por Hijo, ambos padres (o los mayores a cargo), deben encontrarse en alguna de las siguientes situaciones:
            <ul className="mt-3">
                <li>Estar desocupados</li>
                <li>Ser Trabajador no registrado, (trabajar en negro).</li>
                <li>Monotributistas sociales y</li>
                <li>Empleados del Servicio Doméstico.</li>
            </ul>
            <h2 className="" ref={titulo2}>Requisitos para Asignación Universal por Hijo</h2>
            <ul>
                <li>El el caso de un hijo con discapacidad, deberás tramitar previamente la autorización respectiva para el
              cobro de asignaciones por hijo con discapacidad. En este caso, la asignación es sin límite de edad.</li>
                <li>Para poder recibir el cobro de esta asignación, es indispensable acreditar la escolarización y controles
              de salud de los niños por los cuales se percibe la ayuda.</li>
                <li>Presentar la documentación requerida por ANSES para cumplimentar el trámite.</li>
            </ul>
            Una vez reunas todos los requisitos, podrás iniciar el trámite. Recordá que podés usar nuestro nuevo sistema de formularios inteligentes para finalizar el trámite más rápido.
            <h2 ref={titulo3}>¿Cómo inicio al trámite para cobrar asignacion?</h2>
            <div className="alert alert-info" role="alert">
                <strong>A tener en cuenta:</strong> la información del grupo familiar registrada en la base de datos
                de ANSES debe estar actualizada. Antes de continuar con el trámite, te recomendamos verificar esto desde <a href="">Mi ANSES</a> con tu clave de la Seguridad Social.
            </div>
            La solicitud de la Asignación Universal por Hijo se realiza únicamente de manera presencial, y sin turno previo, en cualquier dependencia de ANSES.
            El titular del beneficio deberá presentar la Libreta Nacional de Seguridad Social, Salud y Educación o
            Formulario de la Seguridad Social, Salud y Educación (PS 1.47) ante la ANSES con turno previo. Solicitar
            turno.
            <h3 className="py-2">Pasos para la presentación de la documentación</h3>
            <div className="row mx-0">
                <ol className="col-12 col-md-6">
                    <li>Imprimir el Formulario Libreta PS 1.47 en, ingresando a la sección Asignaciones
                    Familiares.</li>
                    <li>Llevarlo a la escuela para que las autoridades educativas lo completen y firmen.</li>
                    <li>Ir con el niño al centro de salud para que le realicen los controles o apliquen las vacunas y lo
                    certifiquen en el Formulario Libreta.</li>
                    <li>Pedir un turno en www.anses.gob.ar y presentar el PS 1.47 completo en las oficinas de la ANSES en la fecha y horario asignado en el turno.</li>
                </ol>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                    Podes descargar el formulario de libreta ANSES desde el siguiente botón
                    <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-01/PS%201.47%20DDJJ%20ASIGNACION%20UNIVERSAL.pdf" className="btn btn-primary my-3 text-center" target="_blank" rel="noopener noreferrer">Formulario PS 1.47 ANSES</a>
                </div>
            </div>
            <h3>Modalidad de Pago</h3>
            A diferencia de otras prestaciones, el pago de la <strong>Asignación Universal por Hijo</strong> se realiza
            en dos partes: <br />
            El 80% de la asignación se abonará de manera mensual y el 20% restante, se abonará una sola vez al año, siempre que se cumplan con los siguientes requisitos:
            <ul>
                <li>
                    Que los menores de 5 años se encuentren anotados en el <a href="">Programa Sumar</a>
                </li>
                <li>
                    Que los menores entre 5 y 18 años hayan cumplido con los controles de salud y asistan a un establecimiento educativo formal.
                </li>
            </ul>
            {/* <h2>Temas relacionados</h2>
            <div className="card-deck">
                <div className="card my-4">
                    <a>
                        <div className="card-body">
                            <h5 className="card-title">Asignación Familiar por Hijo</h5>
                            <p className="card-text"></p>
                        </div>
                    </a>
                </div>
                <div className="card my-4">
                    <a href="">
                        <div className="card-body">
                            <h4 className="card-title">Crédito ANSES Asignación Universal por hijo</h4>
                            <p className="card-text">¿A quien le corresponde?, ¿Cómo inicio el trámite?, ¿De cuanto son las cuotas?
                            </p>
                        </div>
                    </a>
                </div>
                <div className="card my-4">
                    <a href="">
                        <div className="card-body">
                            <h4 className="card-title">¿Cuándo y Dónde cobro Asignación Universal?</h4>
                            <p className="card-text">Consulta la fecha y lugar de cobro.</p>
                        </div>
                    </a>
                </div>
            </div> */}
            <h2>Monto Asignacion Universal por Hijo 2020</h2>
            Podés consultar el monto de las asignaciones desde el siguiente botón <br/>
            <div className="text-center">
                <a href="https://www.anses.gob.ar/sites/default/files/cartilla/2020-09/Montos%20AAFF%20Septiembre%202020.pdf" className="btn btn-primary my-3" target="_blank" rel="noopener noreferrer">Monto Asignaciones</a>
            </div>
        </>
        }
        />
    )
}