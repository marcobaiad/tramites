import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/indice'));

export default function AsignacionPorEmbazaro() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    return (
        <MainDiv page={
            <>
                <Helmet description="¿Como cobrar asignación por Embarazo? Encontrá todo lo referido con la asignación por Embarazo en tramitero.com" contextUrl="index" title="¿Cuándo corresponde cobrar asignacion por Embarazo? 2020" />
                <h1 className="text-center">Asignación por Embarazo ¿Qué es?</h1>
                <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre la asignación por embarazo en 2020.</p> 
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
                La <strong>asignación por embarazo</strong> es una ayuda mensual que reciben las mujeres que se encuentren en periodo de gestacional, a partir las 12 semanas hasta la concepción o interrupción del embarazo.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice 
                        description1="¿A quien le corresponde la asignación por Embarazo?" 
                        description2="¿Cuales son los requisitos para acceder al SUAF 2020?"
                        description3="Trámite para cobrar Asignación Familiar por Hijo 2020" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h2>¿A quien le corresponde cobrar asignación por Embarazo?</h2>
                Las personas a las que les corresponde esta asignación son las siguientes:
                <ul className="my-3">
                    <li>Mujeres sin trabajo o trabajadoras informales</li>
                    <li>Monotributistas sociales</li>
                    <li>Trabajadoras del servicio domestico en blanco</li>
                    <li>Personas inscriptas en el programa Hacemos Futuro.</li>
                </ul>
                <div class="alert alert-info border-primary" role="alert">
                    <strong>Importante: </strong> Para acceder a esta prestación, hambas partes (Madre y Padre), deberán encotrarse en alguna de las situaciones mencionadas arriba.
                </div>
                <h2>Requisitos para Cobrar Asignación por Embarazo</h2>
                <ul>
                    <li>Estar cursando un embarazo de más de 12 semanas</li>
                    <li>Cumplir con los contorles Médicos</li>
                    <li>Si sos argentina, deberás:
                        <li>
                            Vivir en el Pais
                        </li>
                        <li>
                            Tener DNI
                        </li>
                    </li>
                    <li>Si sos extranjera:
                        <li>Deberás tener 3 años de residencia.</li>
                        <li>Tener DNI</li>
                    </li>
                    <li>En caso de ser trabajadora informal, deberás inscribirte en el <strong>Programa SUMAR</strong> y no contar con obra social.</li>
                </ul>
                <h2>¿Que documentación necesito presentar?</h2>
                Para poder realizar el trámite es necesario que juntes toda la documentación solicitada que detallamos abajo:
                <ul className="my-3">
                    <li>DNI (original y copia)</li>
                    <li>Formulario <a href="https://www.anses.gob.ar/sites/default/files/formulario/2018-03/PS%202.67%20SOLICITUD%20ASIGNACION%20POR%20EMBARAZO.pdf" target="_blank" rel="noopener noreferrer">PS 2.67 - Solicitud por Embarazo</a> Firmado por el solicitante y el médico.</li>
                    <li>En caso de ser trabajadora informal, deberás presentar el comprobante de inscripción al <strong>Programa SUMAR</strong>.</li>
                </ul>
                <h2>¿Cómo realizar el trámite?</h2>
                <div class="alert alert-info border-primary" role="alert">
                    <strong>¡Atención! </strong> por la situación de aislamiento social, el trámite debe realizarse por <a href="" target="_blank" rel="noopener noreferrer">Atención Virtual</a> con clave de seguridad social.
                </div>
                Una vez hayas ingresado con tu clave, los pasos son los siguientes:
                <ol className="my-3">
                    <li>Presiná en boton de Iniciar Atención que está a la derecha.</li>
                    <li>Elegí el trámite que querés realizar</li>
                    <li>Elegí cual es tu situación laboral actual</li>
                    <li>Luego, vas a tener que adjuntar la documentación requedida: Formulario <a href="https://www.anses.gob.ar/sites/default/files/formulario/2018-03/PS%202.67%20SOLICITUD%20ASIGNACION%20POR%20EMBARAZO.pdf" target="_blank" rel="noopener noreferrer">PS 2.67 - Solicitud por Embarazo</a> (rubro 1 y 2) y también el <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-07/PS%202.72%20reclamo.medio%20de%20pago%20y%20apoderado%20CUNA.pdf" target="_blank" rel="noopener noreferrer">PS 2.72 - Reclamo/ Medio de Pago y Apoderado</a> (rubro 3)</li>
                    <li>En caso de elegir CBU, deberás adjuntar también constancia del mismo emitida por tu banco o homebanking.</li>
                    <li>Marcar que aceptas terminos y condiciones y guardar.</li>
                </ol>
                

            </>
        }/>
    );
}
