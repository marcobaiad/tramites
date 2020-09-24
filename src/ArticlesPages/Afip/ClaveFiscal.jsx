import React, { useRef } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function ClaveFiscal() {
    
    return (
        <MainDiv page={
        <>
            <Helmet description="¿Querés generar tu Clave Fiscal? En tramitero.com te ayudamos a hacerlo de la manera más rápida y sencilla. Entrá ahora y termina tu trámite" contextUrl="index" title="Clave Fiscal AFIP" />
            <h1 className="text-center">Clave Fiscal AFIP</h1>
            La <strong>Clave Fiscal de AFIP</strong> es la clave que te permite realizar ciertos trámites en la página de AFIP a través de internet. El objetivo de la misma es ser un medio ágil para que no sea necesario asistir presencialmente a una dependencia u oficina para poder realizar un trámite. <br />
            La clave fiscal tiene distintos tipos de niveles los cuales utiliza la <strong>Administración Federal de ingresos brutos</strong> para determinar cuales son los trámites que podes realizar y cuales no.
            <h2>¿Cuáles son los niveles de Clave Fiscal?</h2>
            Existen 4 niveles concretamente. Desde el nivel 1 al nivel 4.
            <br />
            <h3>Clave Fiscal Nivel 1</h3>
            <ul className="my-2">
                <li>Subir tu Curriculum a la página de AFIP</li>
            </ul>
            Esta clave se trámita por internet desde la <a href="https://www.afip.gob.ar/sitio/externos/default.asp" target="_blank" rel="noopener noreferrer">página de AFIP</a>.
            <h3>Clave Fiscal Nivel 2</h3>
            <ul className="my-2">
                <li>Presentar DDJJ y pagos de Servicio</li>
                <li>Consultar tus aportes en Línea</li>
                <li>Consultar datos registrales y dar de baja</li>
            </ul>
            para solicitar la clave de nivel 2, deberás realizarla por medio de un homebanking.
            <h3>Clave fiscal Nivel 3</h3>
            <ul className="my-2">
                <li>Los trámites ya mencionados.</li>
                <li>Posibilidad de autorizar a otras personas a actuar bajo tu nombre en la plataforma.</li>
            </ul>
            La <strong>clave fiscal nivel 3</strong> se obtiene de las siguientes maneras:
            <div className="row mx-0 justify-content-center justify-content-md-between">
                <ol className="my-2 col-12 col-md-6">
                    <li>Por la app Mi AFIP, desde el menú Herramientas en la opción Solicitud y/o recupero de clave fiscal</li>
                    <li>De forma presencial <strong>con turno previo</strong> en cualquier oficina presentando documentación que acredite tu identidad. Dicha documentación dependerá de si la solicitud de la clave la realiza una persona humana, una sucesión indivisa o persona júridica.</li>
                </ol>
                <div className="container text-center border col-12 col-md-4">
                    Podes descargar la app desde google play y desde la App Store de apple escaneando el siguiente código QR<br />
                    {/* <a className="btn bg-grad font-weight-bold my-3" href="https://play.google.com/store/apps/details?id=ar.gob.afip.mobile.android.contribuyentes.mi_afip&hl=es" target="_blank" rel="noopener noreferrer">MI AFIP</a> <br/> */}
                    <img className="mt-3 w-25" src={require('../../assets/AFIP/MI AFIP QR.svg')} alt="código qr para descargar app Mi AFIP para Android y para IOS" />
                </div>
            </div>
            <h3>Clave Fiscal nivel 4</h3>
            <ul className="my-2">
                <li>Los trámites ya mencionados.</li>
                <li>Gestiones Aduaneras.</li>
            </ul>
            Para solicitar la <strong>clave fiscal nivel 4</strong> tenés que:
            <ol id="nivel4">
                <li>
                    Utilizar el Software-Token desde un dispositivo móvil y descargar la aplicación <strong>AFIP OTP</strong>, disponible para iOS y Android.
                </li>
                <li>
                    Solicitar un turno web a través del sitio institucional para el trámite Soft token- Activación de clave.
                </li>
                <li>
                    Presentar tu DNI y tu dispositivo movil para que se efectúe el registro del mismo.
                </li>
                <li>
                    Te brindarán un código QR de acceso.
                </li>
                <li>
                    La aplicación “AFIP OTP” generará un PIN inicial de activación, el cual deberá ingresarse en la pantalla debajo del código QR.
                </li>
                <li>
                    Ingresado el PIN, se asociará la CUIT o CUIL del ciudadano al Software-Token, y la activación del dispositivo se habrá realizado.
                </li>
            </ol>
            <div className="alert alert-info" role="alert">
                <strong>A tener en cuenta: </strong> 
                En caso de ua disponer un Hardware-Token activo, no se se hará la activación de un Software-Token.
            </div>
           <h2>¿Como elevar el nivel de clave?</h2>
           Si ya dispones de una clave fiscal pero necesitas una de mayor nivel, podrás realizar la operación desde la app <strong>MI AFIP</strong> en la sección de herramientas la en la opción Solicitud y/o recupero de Clave. <br/>
           En caso de querer hacerlo de forma personal, podrás elevar tu clave de dos formas: deberás asistir a uno de los puestos de autogestión de blanqueo de clave fiscal con identificación de huella digital. O en su defecto asistir a una dependencia de AFIP (previo debés hacer sacado un turno) y presentar el <strong><a href="https://www.argentina.gob.ar/sites/default/files/formulario-206m.pdf" target="_blank" rel="noopener noreferrer">F. 206/M - Multinota</a></strong>. <br/>
           En caso de querer una clave de nivel 4 es necesario realizar los pasos mencionados <a>aquí</a>
        </>}
        />
    )
}