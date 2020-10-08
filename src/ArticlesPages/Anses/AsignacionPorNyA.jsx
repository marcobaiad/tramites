import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function AsignacionPorEmbazaro() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    return (
        <MainDiv page={
            <>
                <Helmet description="Esta es una guía de trámite sobre  como cobrar asignación por Nacimiento y Adopción en 2020. En tramitero.com te ayudamos a realizar el trámite" contextUrl="index, follow" title="Asignación por Nacimiento ¿A quien le corresponde?" />
                <h1 className="text-center">Anses Asignación por Nacimiento y Adopción ¿Qué es?</h1>
                <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre la Asignación por Nacimiento y Adopción en 2020.</p> 
                <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>A quien le corresponde</li>
                            <li>Requisitos</li>
                            <li>Documentación Necesaria</li>
                            <li>Como realizar el trámite</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                La <strong>asignación Nacimiento y Adopción</strong> es un beneficio único que cobra solo uno de los padre. Esta asignación está dirigida para trabajadores registrados por el nacimiento o adopción de un hijo.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice 
                        description1="¿A quien le corresponde?" 
                        description2="¿Cuáles son los requisitos?"
                        description3="¿Qué documentación necesito?" 
                        description4="¿Cómo realizar el trámite?" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                        nodo4={titulo4}
                    />
                </Suspense>
                <h2 ref={titulo1}>¿A quien le corresponde cobrar asignación por Nacimiento y Adopción?</h2>
                Las personas a las que les corresponde esta asignación son las siguientes:
                <ul className="my-3">
                    <li>Trabajadores en blanco</li>
                    <li>Trabajadores que estén cobrando por ART</li>
                    <li>Personas que cobren <a href="/anses/seguro-de-desempleo">Fondo de Desempleo</a></li>
                    <li>Personas que cobren Pensión Honorifica de Veteranos de Guerra del Atlantico Sur.</li>
                </ul>
                <h2 ref={titulo2}>Requisitos para Cobrar Asignación por Embarazo</h2>
                <ul className="my-3">
                    <li>Si es por nacimiento: el bebé debe tener entre 2 mese y 2 años de vida.</li>
                    <li>En caso de Adopción: debe iniciarse el trámite entre los 2 meses y 2 años desde que se dictó la sentencia.</li>
                    <li>Los ingresos tanto individual como del grupo familiar, no deben superar los <a href="https://www.anses.gob.ar/sites/default/files/cartilla/2020-09/Montos%20AAFF%20Septiembre%202020.pdf" target="_blank" rel="noopener noreferrer">Montos Máximos Vigentes</a>.
                    </li>
                    <li>Si sos trabajador registrado, deberás tener como mínimo 6 meses de antigüedad.
                    </li>
                </ul>
                <h2 ref={titulo3}>¿Que documentación necesito presentar?</h2>
                Para poder realizar el trámite es necesario que juntes toda la documentación solicitada que detallamos abajo:
                <ul className="my-3">
                    <li>DNI (original y copia) de padres e Hijo</li>
                    <li>Partida de Nacimiento.</li>
                    <li>En caso de ser necesario, Sentencia de Adopción.</li>
                </ul>
                <h2 ref={titulo4}>¿Cómo realizar el trámite?</h2>
                Este trámite se realiza de manera presencial. Es necesario sacar turno desde la página de <a href="https://servicioswww.anses.gob.ar/TurnosInternet/g/58e54e45faaa4d3cb264b9e80fe1713d/Burbujas/Prestaciones" target="_blank" rel="noopener noreferrer">Servicios WEB de ANSES</a>.
                <ol className="my-3">
                    <li>Una vez que hayas ingresado, deberás buscar dentro de los trámites disponibles el Menú Asignaciones Familiares y seleccionar el trámite que estás realizando.
                    <div className="row mx-0 justify-content-center my-3"><img className="img-fluid" src={require('../../assets/Anses/Asignacion por Nacimiento y Adopción/Asignacion-por-Nacimiento-y-Adopción.webp')} alt="Asignación por Nacimiento y Adopción"/></div>
                    </li>
                    <li>Ingresá  número de CUIL de la persona que va a realizar el trámite y presioná el botón CONTINUAR para que el turno sea asignado.</li>
                    <li>Solo resta presentar toda la documentación requerida el día asígnado y eso es todo.</li>
                </ol>
            </>
        }/>
    );
}
