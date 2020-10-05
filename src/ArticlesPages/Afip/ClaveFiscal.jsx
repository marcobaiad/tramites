import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';
import Indice from '../../components/Indice';

export default function ClaveFiscal() {
    
    const titulo1 = React.useRef(null)
    const titulo2 = React.useRef(null)
    const titulo3 = React.useRef(null)
    const titulo4 = React.useRef(null)
    const titulo5 = React.useRef(null)
    const titulo6 = React.useRef(null)


    return (
        <MainDiv page={
        <>
            <Helmet description="¿Como generar tu Clave Fiscal? En tramitero.com te ayudamos a hacerlo de la manera más rápida y sencilla. Entrá ahora y fijate como hacerlo" contextUrl="index, follow" title="Clave Fiscal AFIP" />
            <h1 className="text-center">Clave Fiscal AFIP</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como obtener la clave Fiscal en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué vas a encontrar?</strong>
                    <ul>
                        <li>Que necesito</li>
                        <li>Como se hace</li>
                        <li>Como elevar el nivel</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            La <strong>Clave Fiscal de AFIP</strong> es la clave que te permite realizar ciertos trámites en la página de AFIP a través de internet. El objetivo de la misma es ser un medio ágil para que no sea necesario asistir presencialmente a una dependencia u oficina para poder realizar un trámite. <br />
            <Indice 
                description1="¿Cuáles son los niveles de Clave Fiscal?" 
                description2="Clave Fiscal nivel 1"
                description3="Clave Fiscal Nivel 2"
                description4="Solicitar Clave Fiscal Nivel 3"
                description5="Solicitar Clave Fiscal Nivel 4" 
                description6="¿Cómo elevar el nivel de Clave?" 
                nodo1={titulo1}
                nodo2={titulo2}
                nodo3={titulo3} 
                nodo4={titulo4} 
                nodo5={titulo5} 
                nodo6={titulo6} 
            />
            La clave fiscal tiene distintos tipos de niveles de seguridad, los cuales utiliza la <strong>Administración Federal de ingresos brutos</strong> para determinar cuales son los trámites que podes realizar y cuales no.
            <h2 ref={titulo1}>¿Cuáles son los niveles de Clave Fiscal?</h2>
            Como ya comentamos, según el nivel de tu clave vas a poder acceder a un servicio de AFIP o no. Existen 4 niveles concretamente: 
            <br />
            <strong>Clave Fiscal Nivel 1</strong> <br/>
            ¿Que tarea podrás realizar?
            <ul className="my-3">
                <li>Subir tu Curriculum a la página de AFIP</li>
            </ul>
            <strong>Clave Fiscal Nivel 2</strong>
            <ul className="my-3">
                <li>Presentar DDJJ y pagos de Servicio</li>
                <li>Consultar tus aportes en Línea</li>
                <li>Consultar datos registrales y dar de baja</li>
            </ul>
            <strong>Clave fiscal Nivel 3</strong>
            <ul className="my-3">
                <li>Los trámites ya mencionados.</li>
                <li>Posibilidad de autorizar a otras personas a actuar bajo tu nombre en la plataforma.</li>
            </ul>
            <strong>Clave Fiscal nivel 4</strong>
            <ul className="my-3">
                <li>Los trámites ya mencionados.</li>
                <li>Gestiones Aduaneras.</li>
            </ul>
            <h2>¿Cómo sacar Clave Fiscal AFIP?</h2>
            <h4 ref={titulo5}>Clave Fiscal N° 4</h4>
            Como <strong>clave fiscal nivel 4</strong> paso por paso:
            <ol className="my-3" id="nivel4">
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
            <div className="alert alert-info border-primary" role="alert">
                <strong>A tener en cuenta: </strong> 
                En caso de ya disponer un Hardware-Token activo, no se se hará la activación de un Software-Token.
            </div>
            <h4 ref={titulo4}>Clave Fiscal N° 3</h4>
            ¿Cómo sacar <strong>clave fiscal nivel 3</strong>?
            <div className="row mx-0 justify-content-center justify-content-md-between px-4">
                <ol className="my-2 col-12 col-md-6">
                    <li>Por la app Mi AFIP, desde el menú Herramientas en la opción Solicitud y/o recupero de clave fiscal</li>
                    <li>De forma presencial <strong>con turno previo</strong> en cualquier oficina presentando documentación que acredite tu identidad. Dicha documentación dependerá de si la solicitud de la clave la realiza una persona humana, una sucesión indivisa o persona júridica.</li>
                </ol>
                <div className="text-center border col-12 col-md-4 py-2">
                    Podes descargar la app desde google play y desde la App Store de apple escaneando el siguiente código QR<br />
                    {/* <a className="btn bg-grad font-weight-bold my-3" href="https://play.google.com/store/apps/details?id=ar.gob.afip.mobile.android.contribuyentes.mi_afip&hl=es" target="_blank" rel="noopener noreferrer">MI AFIP</a> <br/> */}
                    <img className="my-1 w-50" src={require('../../assets/AFIP/MI AFIP QR.svg')} alt="código qr para descargar app Mi AFIP para Android y para IOS" />
                </div>
            </div>           
            <h4 ref={titulo3}>Clave Fiscal N° 2</h4>
            Para solicitar la clave de nivel 2, deberás realizarla por medio de un homebanking. <br/>
            <h4 ref={titulo2}>Clave Fiscal N° 1</h4>
            Esta clave se trámita por internet desde la <a href="https://www.afip.gob.ar/sitio/externos/default.asp" target="_blank" rel="noopener noreferrer">página de AFIP</a> <br/>
           <h2 ref={titulo6}>¿Como elevar el nivel de clave?</h2>
           Si ya dispones de una clave fiscal pero necesitas una de mayor nivel, podrás realizar la operación desde la app <strong>MI AFIP</strong> en la sección de herramientas la en la opción Solicitud y/o recupero de Clave. <br/>
           En caso de querer hacerlo de forma personal, podrás elevar tu clave de dos formas: deberás asistir a uno de los puestos de autogestión de blanqueo de clave fiscal con identificación de huella digital. O en su defecto asistir a una dependencia de AFIP (previo debés hacer sacado un turno) y presentar el <strong><a href="https://www.argentina.gob.ar/sites/default/files/formulario-206m.pdf" target="_blank" rel="noopener noreferrer">F. 206/M - Multinota</a></strong>. <br/>
           En caso de querer una clave de nivel 4 es necesario realizar los pasos mencionados <div className="btn btn-link px-0 mx-0 my-0 pt-0 pb-2" onClick={() => titulo5.current.scrollIntoView()}>aquí</div>
        </>}
        />
    )
}