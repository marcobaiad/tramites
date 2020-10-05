import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice')); 

export default function TituloAutomotor() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return(
        <MainDiv page={
            <>
                <Helmet description="¿Cómo sacar el Duplocado de mi Titulo? ¿Cúanto Cuesta? En Trámitero.com te ayudamos con tu trámite con nuestras guías rápidas y sencillas." contextUrl="index, follow" title="Titulo Duplicado Automotor" />
                <h1 className="text-center">Titulo por Duplicado del Automotor</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa para sacar la Cedula Azul en 2020.</p> 
                    <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>Requisitos y Documentación</li>
                            <li>Trámite paso a paso</li>
                            <li>Cuanto Cuesta</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                El <strong>titulo del Automotor</strong> es el documento con el cual podrás certificar que un vehículo ya sea auto, moto o maquinaria, forma parte de tu propiedad.
                Si perdiste o te robaron el titulo de tu auto o se te deterioró el mismo deberás solicitar un duplicado.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice description1="¿Qué documentación necesito para sacar el duplicado?" 
                        description2="¿Cómo hacer el trámite?"
                        description3="¿Cuánto cuesta?" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h2 ref={titulo1}>¿Que necesito para solicitar un duplicado del titulo?</h2>
                La documentación ncecesaria para sacar el duplicado del titulo del automotor, son los siguientes: 
                <ul className="my-3">
                    <li>Documento identificatorio:</li>
                    <ul>
                        <li>DNI en caso de ser argentino. DNI de paises limítrofes o pasaporte en caso de ser extranjero.</li>
                        <div className="alert alert-primary mt-3" role="alert">
                            <strong>Importante</strong>: La constancia de documento en trámite <strong>NO</strong> acredita identidad.
                        </div>
                        <li>Si sos apoderado o en su defecto representante lega, deberás presentar documentos que lo comprueben.</li>
                    </ul>
                    <li>
                        En caso de Hurto o extravío, deberás presenar la solicitud Tipo 12.
                    </li>
                    <li>
                        Si el titulo está deteriorado y no es legible, deberás presentarlo de igual manera para avanzar con el trámite.
                    </li>
                </ul>
                <h2 ref={titulo2}>¿Cómo hacer el Duplicado de Titulo Automotor?</h2>
                El trámite se realiza de manera presencial (en caso de extravío o hurto del documento) o semipresencial (por deterioro). Previo a iniciar el trámite deberás sacar turno en la página de oficial del automtor. Podes ingresar desde <a href="https://www2.jus.gov.ar/dnrpa-site/#!/identificarDominio" target="_blank" rel="noopener noreferrer">acá</a>. <br/>
                <strong className="mt-3">Método Presencial</strong><br/>
                <ol className="my-3">
                    <li className="">
                        En caso de ser perdida o hurto del titulo deberás realizar la verificación física del vehículo en una planta habilitada.
                    </li>
                    <li>
                        Presentar Formulario 02. Deberás adicionar el Formulario 59 en caso de que el trámite lo realice un tercero.
                    </li>
                    <li>
                        Retirar el titulo.
                    </li>
                </ol>
                <strong>Trámite Semipresencial.</strong>
                <ol className="my-3">
                    <li>
                        Sacar turno desde la pagina oficial del Registro automotor. Podes ingresar desde <a href="https://www2.jus.gov.ar/dnrpa-site/#!/identificarDominio" target="_blank" rel="noopener noreferrer">acá</a>.
                    </li>
                    <li>
                        Pagá los aranceles en linea o esperá a pagarlos cuando presentes la documentación en la oficina.
                    </li>
                    <li>
                        Presentar documentación y solicitar el Formulario tipo TP. En caso de no ser titular del vehículo, deberás solicitAr el Formulario 59. 
                    </li>
                    <li>
                        Retirar el duplicado 24 horas habiles despues o descargarlo desde la web.
                    </li>
                </ol>
                <h3 ref={titulo3}>¿Cúanto es el costo del trámite?</h3>
                El costo va a depender de los aranceles del DNRPA. En este trámite los aranceles involucrados son: Titulo duplicado, cert de firma, formulario TP, formulario 13, solicitud de deuda / multa / infracción. <br/>
                <div className="my-3 text-center">
                Podés consultar los aranceles desde el siguiente botón. <br/>
                <a href="https://www.argentina.gob.ar/propiedadautomotor/aranceles" className="btn btn-primary font-weight-bold my-2" target="_blank" rel="noopener noreferrer">Aranceles</a>
                </div>
            </>

        }/>
    )
}