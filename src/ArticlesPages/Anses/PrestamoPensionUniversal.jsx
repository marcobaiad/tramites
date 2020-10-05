import React, { Suspense } from "react";
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function JubiladosPensionados() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);


    return (
        <MainDiv page={
        <>
            <Helmet description="Esta es una guía completa y senclla de como sacar el préstamo ANSES para Pensión Universal por Vejez. Entrá y enterate como acceder al crédito" contextUrl="index, follow" title="¿Cómo sacar el Préstamo ANSES para Pensión Universal para Adulto Mayor? 2020" />
            <h1 className="text-center">Préstamo ANSES para Pensión Universal para Adulto Mayor</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como sacar un Crédito Anses para Pensión Universal para Adulto Mayor en 2020.</p> 
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
            <strong>El crédito ANSES para Pensión Universal para adulto mayor:</strong> es una linea de créditos a tasa fija, para personas que cobren pensión Universal por Vejez. El sistema de amortización utilizado como en el resto de créditos de ANSES, es el frances.
            <Suspense fallback={
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
            }>
                <Indice 
                    description1="Documentación necesaria y Requisitos" 
                    description2="Montos y Cuotas vigentes en 2020"
                    description3="¿Cómo solicitar el crédito en 2020?" 
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                />
            </Suspense>
            <h2 ref={titulo1}>Requisitos para acceder al Crédito para Pensión Universal por Vejez</h2>
            <ul className="my-3">
                <li>El solicitante debe residir en el país</li>
                <li>El solicitante debe tener menos de 90 al momento de finalizar el crédito.</li>
            </ul>
            <strong>¿Que documentación necesito?</strong>
            <ul className="my-3">
                <li>Deberás presentar tu <span className="font-weight-bold">DNI</span>, te recomendamos que llevar una copia del mismo por cualquier cosa.</li>
                <li>Tambíen deberás llevar tu <span className="font-weight-bold">N° de CBU</span>, podés obtenerlo desde un cajero o desde tu homebanking.</li>
            </ul>
            <h3 ref={titulo2}>Montos y cuotas vigentes 2020</h3>
            <div className="alert alert-info border-primary" role="alert">
                <strong>A tener en cuenta:</strong> la cuota del crédito <strong>NO</strong> puede superar el 20% de tu ingreso mensual.
            </div>
            El monto a solicitar puede ir desde los $5000 hasta los $70000 en 24, 36, 48 y 60 cuotas.
            <div className="row justify-content-center mx-0 my-2">
                <strong>Tabla de montos para Préstamo ANSES para Pensión Universal por Vejez</strong>
                <img className="img-fluid my-2" src={require('../../assets/Anses/Credito pension no contributiva/Tabla-de-cuotas-credito-para-Madre-de-7-hijos.webp')} title="Tabla de montos para Crédito ANSES pensión no Contributiva madre de 7 hijos" alt="Tabla de montos para Crédito ANSES pensión no Contributiva madre de 7 hijos" />
            </div>
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
        </>}
        />
    )
}