import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';
import { Link } from 'react-router-dom';

const Indice = React.lazy(() => import('../../components/Indice')); 

export default function TransferenciaAutomotor() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return(
        <MainDiv page={
            <>
                <Helmet description="Mirá como realizar rápidamente la transferencia de tu vehículo. Somos lideres en el sector de guías para realizar trámites en linea." contextUrl="index, follow" title="Transferencia Automotor" />
                <h1 className="text-center">Transferencia de Automotor</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa para sacar la Cedula Azul en 2020.</p> 
                    <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>Requisitos y Documentación</li>
                            <li>Como sacar turno</li>
                            <li>Como hacer el trámite</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                La <strong>transferencia de dominio</strong> o <strong>transferencia de automotor</strong> es el documento que se debe trámitar cuando una persona quiere transfererir la titularidad de su vehículo a otra persona. Cabe aclarar que cuando hablamos de vehículo hacemos referencia a autos, motos y maquinaria agrícola vial o industrial.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice description1="¿Qué necesito para realizar una transferencia?" 
                        description2="¿Cómo hacer el trámite en 2020?"
                        description3="¿Cuanto cuesta transferir un vehículo?" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h2 ref={titulo1}>¿Cuales son los Requisitos para Transferir un Auto?</h2>
                Los requisitos para la transferencia de un automotor son:
                <div className="row justify-content-arround mx-0 flex-wrap">
                    <ol className="my-3 col-12 col-md-6">
                        <li>
                            Documentación que acredite la identidad de las dos partes implicadas (comprador y vendedor). En caso de tratarse de un bien ganancial el conuyge también deberá presentar esta Documentación.
                            <ul>
                                <li>
                                    Argentinos: DNI
                                </li>
                                <li>
                                    Extranjeros: Pasaporte o DNI de paises limítrofes.
                                </li>
                                <li>
                                    Constancia de CUIT (debe ser emitida por AFIP o por ANSES) o CDI del comprador (F N°663).
                                </li>
                            </ul>
                        </li>
                        <div className="alert alert-primary mt-3" role="alert">
                            <strong>A tener en Cuenta: </strong> 
                            La constancia de documento en trámite NO acredita identidad.
                        </div>
                        <li>
                            Titulo o Asignación de propiedad del automotor y todas las cédulas del mismo (azul/es y verde/s).
                        </li>
                        <li>
                            <strong>Formulario 08</strong>. Corroborá como trámitarlo digitalmente desde el siguiente link <Link to="/Automotor/08-por-internet" className="font-weight-bold">08 por Internet</Link>.
                        </li>
                        <li>
                            En caso de prenda del vehículo, deberá presentar C. Documento o Telegrama indicando haber informado de la transferencia al acreedor prendario.
                        </li>
                        <li>
                            <strong>F N°381 de AFIP</strong> en caso de tratarse de maquinaria.
                        </li>
                    </ol>
                    <div className="col-12 col-md-5 text-center py-3">
                        Descargá el <strong> Formulario de Clave de Identificación N°663</strong> desde el siguiente botón. <br/>
                        <a href="https://serviciosweb.afip.gob.ar/genericos/formularios/pdf/interactivos/663_NM%20interactivo.pdf" target="_blank" rel="noopener noreferrer" className="font-weight-bold btn btn-primary">F - N°663 AFIP</a>                         
                    </div>
                </div>
                <h2 ref={titulo2}>¿Cómo hacer el trámite para transferir un Auto o vehículo?</h2>
                Para vender o transferir un vehículo es necesario realizar los siguientes pasos: 
                <ol className="my-3">
                    <li>
                        Verificación técnica en plata habilitada. El objetivo principal es corroborar si el motor y el chasis corresponden con la misma númeración.
                    </li>
                    <li className="row">
                        <p>Tendrás que elegír otro Registro donde radicar el bien transferido o confirmar y dejarlo en la seccional actual.</p>
                        <div>
                            
                        </div> 
                    </li>
                    <li>
                        Formulario 08. Recordá que podes hacerlo de forma totalmente online. Mirá como hacerlo desde <Link to="/Automotor/turno-registro-automotor">acá</Link> 
                    </li>
                    <li>
                        Presentar la documentación ya mencionada anteriormente, tanto vendedor y como comprador y pagar los aranceles. Ese mismo día el registro proveerá del Formulario 13 para la firma del mismo. En caso de haber hecho el 08 por internet, debés llevarlo impreso. 
                    </li>
                    <li>
                        Una vez se haya presentado toda la documentación y pagado todo, se emitirá la constancia de transferencia de dominio.
                    </li>
                </ol>
                <h3 ref={titulo3}>¿Cual es el costo de transferencia del Automotor?</h3>
                <p><strong>El valor de transferencia de un auto</strong> se rige por los aranceles de implicados en la misma <strong>transferencia del automotor</strong>. Consultá los montos desde la fuente oficial haciendo click en el siguiente link <a href="https://www.argentina.gob.ar/propiedadautomotor/aranceles" target="_blank" rel="noopener noreferrer" className="font-weight-bold">Aranceles DNRPA</a></p> ¿Cuáles son los aranceles? <br/>
                <ul>
                    <li>1,5% del valor del auto, 2% en caso de ser importado.</li>
                    <li>Cert de firma</li>
                    <li>Expedición de titulo y cédula</li>
                    <li>Expedición de cédula Azul</li>
                    <li>Alta y baja impositiva</li>
                    <li>Solicitud deuda / multa / infracción</li>
                    <li>Formulario 08 y 13</li>
                    <li>Sellos e impuestos provinciales. (El valor depende de cada provincia.</li>
                </ul>
                <div className="alert alert-primary mt-3 border-info" role="alert">
                    <strong>Importante: </strong> Si el monto de transacción por el vehículo superase $1800000 debés iniciar un trámite previo en el cual deberás comprobar la procedencia del dinero.
                </div>
            </>
        }/>
    )
}