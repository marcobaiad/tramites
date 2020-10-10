import React, { Suspense, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const imgMontosJubilados = require('../../assets/Anses/Creditos/montoJubilados.webp');
const Indice = React.lazy(() => import('../../components/Indice'));
const Relacionados = React.lazy(() => import('../../components/Relacionados'));


export default function JubiladosPensionados() {

    const history = useHistory();
    const Header = React.useRef(null);
    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);


    return (
        <MainDiv page={
        <>
            <Helmet description="Préstamo para jubilados y pensionados ANSES. ¿Cómo acceder al crédito de ANSES? En trámitero.com te ayudamos a sacar el crédoto" contextUrl="index, follow" title="ANSES Cuotas de Prestamo Jubilados 2020" />
            <h1 ref={Header} className="text-center">Préstamo ANSES para Jubilados y Pensionados</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como sacar un Crédito Anses para jubilados y pensionados en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>Que necesito</li>
                        <li>Como se hace</li>
                        <li>Montos y cuotas a solicitar</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            <strong>El crédito ANSES para jubilados y pensionados:</strong> es una linea de créditos a tasa fija, mucho menor a la de cualquier banco del país. Una vez aceptada la solicitud del mismo será acreditado por cuenta bancaria en un plazo no mayor a 5 días hábiles. El sistema de amortización, es el sistema frances. <br/> Si estás interesado en pedir un prestamo, la primera opción a evaluar debería ser esta.
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                <Indice 
                    description1="Documentación necesaria y Requisitos" 
                    description2="Montos y Cuotas vigentes en 2020"
                    description3="¿Cómo solicitar el crédito en 2020?" 
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                />
            </Suspense>
            <h2 ref={titulo1}>Requisitos para acceder al Crédito para Jubilados ANSES</h2>
            <ul className="my-3">
                <li>El solicitante debe residir en el país</li>
                <li>El solicitante debe tener menos de 90 años al momento de finalizar el crédito.</li>
            </ul>
            <strong>¿Que documentación necesito?</strong>
            <ul className="my-3">
                <li>Deberás presentar tu <span className="font-weight-bold">DNI</span>, te recomendamos que llevar una copia del mismo por cualquier cosa. </li>
                <li>Tambíen deberás llevar tu <span className="font-weight-bold">N° de CBU</span>, el mismo se se obtiene desde cualquier cajero de la red de tu banco o desde el HomeBanking del mismo.</li>
            </ul>
            <h3 ref={titulo2}>Montos y cuotas vigentes 2020</h3>
            <div className="alert alert-info border-primary" role="alert">
                <strong>A tener en cuenta:</strong> la cuota del crédito <strong>NO</strong> puede superar el 20% de tu ingreso mensual.
            </div>
            <img className="img-fluid" src={imgMontosJubilados} title="Tabla de montos y plazos para crédito Anses Jibulados" alt="Tabla de montos para Crédito" />
            <h2 ref={titulo3}>¿Cómo solicitar el Crédito ANSES Para Jubilados?</h2>
            <ol className="my-3">
                <li>Ingresá a <a href="https://servicioscorp.anses.gob.ar/clavelogon/logon.aspx?system=mianses">Mi ANSES</a> con tu clave de seguridad social.
                </li>
                <li>Una vez que hayas ingresado, deberás buscar en el menú de la izquierda la sección "Crédito ANSES" y hacerle click. Luego se desplegaran unas opciones y deberás elegir la opción de "Solicitar Préstamo".
                </li>
                <li>Aparecerá un cuadro que indica los montos y cuotas disponibles.</li>
                <li>
                    Para tomar el crédito presioná el botón CONTINUAR para elegir el monto deseado, aceptá los términos y condiciones y el crédito será confirmado.
                </li>
            </ol>
            <div className="alert alert-info border-primary" role="alert">
                <strong>A tener en cuenta:</strong> ANSES aclara que si no recibe el dinero luego de los 5 días hábiles estipulados, puede deberse a una demora por la alta demanda de estos créditos. <br/> En caso de haber pasado 10 días hábiles (2 semanas) y aún no haber recibido el crédito es conveniente realizar el reclamo vía Mi ANSES o en forma telefónica/presencial.
            </div>
            <h5 className="my-4 font-weight-bold">Temas Relacionados</h5>
            <Suspense fallback={
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Cargando...</span>
            </div>
            }>
                <Relacionados 
                    tituloRel1="Crédito ANSES para Jubilados y Pensionados" textRel1="¿Cómo acceder al crédito ANSES para Jubilados y Pensionados? ¿Cuáles son los requisitos? ¿Qué documentación necesito?" pathToRel1="/anses/prestamo-jubilados-y-pensionados" 
                    tituloRel2="Asignación Familiar por Hijo" textRel2="¿Cómo cobrar Asignación Familiar por Hijo? ¿Qué documentación necesito? ¿Cómo hacer el trámite?" pathToRel2="/anses/asignacion-familiar-por-hijo" 
                    tituloRel3="Fondo de Desempleo" textRel3="¿Cuando me corresponde Fondo de Desempleo? ¿Cuánto me corresponde cobrar? Entrá ahora y enterate todo sobre el Fondo de Desempleo." pathToRel3="/anses/seguro-de-desempleo" 
                    tituloRel4="Tarjeta Alimentaria ANSES" textRel4="¿A quien le corresponde la Tarjeta Alimentaria? ¿Cómo hacer el trámite? Entrá y corroborá como solicitar tu tarjeta." pathToRel4="/anses/tarjeta-alimentaria" 
                />
            </Suspense>
        </>}
        />
    )
}