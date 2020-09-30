import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/indice'));

export default function SeguroDesempleo() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    return (
        <MainDiv page={   
        <>
            <Helmet description="En tramitero.com te ayudamos a solicitar el fondo de desempleo de manera rápida y sencilla. Entrá ahora y enterate como realizar tu trámite" contextUrl="index" title="Fondo de Desempleo ANSES 2020" />
            <h1 className="text-center">Fondo de Desempleo</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como cobrar el Seguro de Desempleo de ANSES en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>A quien le corresponde</li>
                        <li>Requisitos</li>
                        <li>Documentación</li>
                        <li>Como hacer el trámite</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            <strong>El fondo de desempleo o Seguro de Desempleo</strong>, es una ayuda mensual por un periodo de no más de 18 meses que brinda ANSES. <strong ref={titulo5}>¿Cuándo cobro fondo de desempleo?</strong> este beneficio le corresponde a todos aquellos empleados registrados que hayan perdido su trabajo por los siguientes motivos:
            <ul className="my-3">
                <li>Despido sin justa causa</li>
                <li>Finalización del contrato</li>
                <li>Causas externas al trabajador</li>
            </ul>
            <Suspense fallback={<div>Cargando...</div>}>
                <Indice 
                    description1="¿Cúal es el monto?" 
                    description2="Requisitos para acceder" 
                    description3="¿Qúe documentación necesito?"
                    description4="¿Cómo realizar el trámite?"
                    description5="¿A quien le corresponde?"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                    nodo4={titulo4}
                    nodo5={titulo5}
               />
            </Suspense>
            <h2 ref={titulo1}>¿Cúal es el monto del Fondo de Desempleo?</h2>
            El monto a percibir y el periodo durante el cual serás beneficiado, va a depender de tu edad y un calculo sobre tus últimos 3 años trabajados. La duración de este beneficio es de entre 2 a 12 meses, con la salvedad de que a las personas mayores de 45 años, el beneficio se extendería hasta los 18 meses.
            <h2 ref={titulo2}>Requisitos para cobrar Fondo de Desempleo</h2>
            Los requisitos que deberás cumplir para acceder a esta prestación son los siguientes: <br/>
            Haber prestado servicio en blanco por al menos 6 meses durante los últimos 3 años. <br />
            Si sos trabajador/a <strong>eventual</strong> o <strong>trabajador/a de temporada</strong> debes haber trabajado con aportes menos de 12 meses en los últimos 3 años pero más de 90 días en el último año.
            <h3 ref={titulo3}>¿Que documentación necesito presentar para cobrar el Fondo de Desempleo?</h3>
            <ul className="my-3">
                <li>Original y copia del DNI</li>
                <li>Según el caso particular de cada persona, se deberá presentar original y copia de documentación fehaciente que acredite legalmente el desempleo.
                </li>
            </ul>
            Documentación a presentar según el caso de extinsión del vinculo:
            <ul className="my-3">
                <li><strong>Despido sin justa causa: </strong>Será necesario presentar carta documento o telegrama de despido.</li>
                <li><strong>Despido por quiebra o concurso preventivo: </strong>Sentencia de quiebra adjudicada, TL del empleador notificando el cese por quiebra.</li>
                <li><strong>Denuncia del contrato de trabajo por el trabajador que amerite justa causa: </strong>Copia de cruce de telegramas enter trabajador y empleador.</li>
                <li><strong>No renovación de contrato a plazo fijo: </strong> copia del contrato vencido.</li>
                <li><strong>Fellecimiento del empleador: </strong> copia del acta de defunción.</li>
                <li><strong>Trabajador cursando licencia por ART al momento de producirse la extinsión del contato de trabajo: </strong>Alta médica de la Aseguradora de Riesgos o incapacidad laboral menor al 66%. En caso de que el porcentaje sea mayor, deberá tramitar el retiro por invalidez.</li>
                <li><strong>El trabajador tenía una enfermedad no laboral que le impidió prestar servicios hasta la extinsión del contrato: </strong>certificado médico de aptitud laboral.</li>
            </ul>
            <h2 ref={titulo4}>Trámite para cobrar Fondo de Desempleo</h2>
            <div className="alert alert-info border-primary" role="alert">
                <strong>A tener en cuenta: </strong>Durante la cuarentena el trámite se realizará únicamente por la web.
            </div>
            <ol className="my-3">
                <li>Consultar en la lista de arriba, cuales son los documentos que precisas para iniciar el trámite según tu caso particular.</li>
                <li>Una vez que hayas reunido todo, ingresa a la página de <a href="https://servicioscorp.anses.gob.ar/clavelogon/logon.aspx?system=siexp" target="_blank" rel="noopener noreferrer">Atención Virtual</a>
                 de ANSES con tu clave de seguridad social.</li>
                <li>Una vez ingreses deberás elegir la opción "Solicitar la Prestación por Desempleo"</li>
                <li>Adjuntar datos y confirmar</li>
            </ol>
        </>}
        />
    )
}