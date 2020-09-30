import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/indice')); 

export default function CedulaAzul() {
    
    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    
    return(
        <MainDiv page={
            <>
                <Helmet description="¿Querés hacer el trámite online para sacar la Cédula Azul? En Tramitero.com te presentamos esta guía super fácil para ayudarte a solicitar tu Cédula" contextUrl="index" title="Cedula Azul" />
                <h1 className="text-center">Cédula Azul</h1>
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
                La <strong>Cédula Azul</strong> es el permiso que se debe trámitar para autorizar a otras personas a conducir un vehículo ajeno. En caso de disponer de esta cédula, no será necesario que la persona autorizada lleve la tarjeta verde del titular. <br/>
                El objetivo de este permiso, es ayudar a mejorar la seguridad vial mediante la identificación de las personas que manejan un rodado y restringir la utilización de vehiculos solo a los individuos que estén autorizados por le propietario.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice description1="¿Qué documentación necesito para sacarla?" 
                        description2="¿Cómo sacar la cedula Azul 2020?"
                        description3="¿Cómo se calcula el valor de una patente?" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h2 ref={titulo1}>Requisitos y documentación necesaria para sacar la Cedula Azul</h2>
                Los requisitos para sacar este permiso son los siguientes:
                <ul className="my-2">
                    <li>
                        DNI.
                    </li>
                    <li>
                        Formulario 02 (Entrega en el registro).
                    </li>
                    <li>
                        Nota o escrito con carácter de DDJJ con firma de la persona que solicita, donde el titular manifieste que reconoce su responsabilidad civil por daños y perjuicios y que otorgar este permiso tiene la misma validez legal que la Cédula verde.
                    </li>
                </ul>
                <h2 ref={titulo2}>¿Cómo sacar la Cédula Azul?</h2>
                <div className="alert alert-info border-primary my-2" role="alert">
                    <strong>Atención, nota Importante:</strong> por los acontecimientos de público conocimiento, este trámite se puede hacer completamente virtual. Con el objetivo de seguir ayudando, es que actualizamos los pasos necesarios para que puedas terminar tu solicitud lo antes posible.
                </div> <br/>
                <div className="row justify-content-arround mx-0">
                <p className="col-12 col-md-6">Previo a iniciar el trámite, deberás asegurarte de haber reunido toda la documentación necesaria y haber sacado turno desde la pagina oficinal de la <a href="https://www2.jus.gov.ar/dnrpa-site/#!/seleccionarTramite" target="_blank" rel="noopener noreferrer">DNRPA</a>.</p> 
                <div className="text-center col-12 col-md-6">
                    Enterate como sacar el turno desde el siguiente botón <br/> <a href="https://tramitero.com/Automotor/turno-registro-automotor" target="_blank" rel="noopener noreferrer" className="btn btn-primary my-2">Turno Automotor</a>
                </div>
                </div>
                <ol className="my-3">
                    <li>
                        Sacar turno
                    </li>
                    <li>
                        Una vez hayas sacado turno, deberás presentrte  la oficina del <strong>DNRPA</strong> con la documentación mencionada más arriba.
                    </li>
                    <li>
                        Completá el <strong>Formulario 02</strong> que te brindarán en el registro. En el rubro OBSERVACIONES, vas a completar con la leyenda de "Cedula de Identificación para autorizado a Conducir" y seguido los datos de la persona a la que se está autorizando. <br/>
                        En caso de que un tercero sea quien esté haciendo el trámite, deberá completar también el <strong>Formulario 59</strong>.
                    </li>
                    <li>
                        Tu cédula azul estará disponible para retirar en 48 es habiles.
                    </li>
                </ol>
                <div className="my-3 card">
                    <div className="card-header bg-info text-white font-weight-bold text-center">
                        El trámite presencial no se encuentra disponible debido al contexto de pandemia. 
                    </div>
                    <div className="card-body">
                        Una vez confirmado que reunimos toda la documentación, los pasos para adquirir este permiso son: 
                        <ol className="my-2">
                            <li>
                                El titular (o apoderado) debe presentarse en el registro de radicación del rodado con su DNI y solicitar el Formulario 02. Recordar llevar la nota de carácte de DDJJ, donde reconocemos que entendemos nuestro papel de cuidadanos y responsabilidad cívica.
                            </li>
                            <li>
                                Pagar el valor correspondiente por el permiso.
                            </li>
                            <li>
                                El último paso es retirar la <strong>Cédula Azul</strong>. Recordá que no es necesario que asista el titular para hacer el retiro, ya que puede hacerlo cualquier perona que presente el recibo de pago.
                            </li>
                        </ol>
                        Para iniciar el trámite deberás acercarte a la <strong>DNRPA</strong> más cercana a tu domicilio.
                        <div className="alert alert-primary mt-2" role="alert">
                            El tiempo aproximado de la entrega de la cédula, suele demorar hasta dos días hábiles.
                        </div>
                    </div>
                </div>
                <h3>¿Cuándo es necesario trámitar la Cédula Azul y quien debe efectuarlo?</h3>
                En necesario realizar este permiso cuando una persona va a conducir regularmente (o no) un vehículo que no es própio y la cédula verde esté vendica, ya que, en caso de estar vigente, no es necesario circular con la Cédula Azul. <br/>
                La persona que debe realizar el trámite es el titular o apoderado del vehículo, en caso de condomínios cualquiera podrá solicitarlo.
                {/* <ol className="my-3">
                    <li>
                        Una vez se haya ingresado a la página, lo primero que debemos hacer es seleccionar el trámite que queremos realizar. En este caso deberemos buscarlo como "EXPEDICIÓN DE CEDULA PARA AUTORIZADO A CONDUCIR" y presionar el botón CONTINUAR. <br/>
                        <div className="row justify-content-center mx-0 my-2">
                            <img loading="lazy" className="img-fluid" src={require('../../assets/Cedula Azul/paso 1 cedula azul.JPG')} alt="Paso 1 para trámite de Cedula Azul DNRPA" title="Paso 1 para trámite de Cedula Azul DNRPA"/>
                        </div>
                    </li>
                    <li>
                        Luego deberás completar los siguientes campos con tu número de dominio (patente) y número de chasis.
                        <div className="row justify-content-center mx-0 my-2">
                            <img loading="lazy" src={require('../../assets/Cedula Azul/paso 2 cedula azul.JPG')} alt="Paso 2 para sacar Cedula azul" title="Paso 2 para sacar Cedula azul" className="img-fluid"/>
                        </div>
                    </li>
                    <li>
                        Por último deberás indicar el número de CUIL/CUIT de la persona que está solicitando la cédula. 
                        <div className="row justify-content-center mx-0 my-2">
                            <img loading="lazy" src={require('../../assets/Cedula Azul/paso 3 cedula azul.JPG')} alt="Paso 3 para tramitar la cedual azul por internet" title="Paso 3 para tramitar la cedual azul por internet" className="img-fluid"/>
                        </div>
                        En caso de no estár en la base de datos de La Dirección del Registro de la Propiedad del Automotor, deberás completar todos los datos detallados a continuación.
                    </li>
                    <ul>
                        <li>
                            Apellido y Nombre
                        </li>
                        <li>
                            Carácter del solicitante (si es el titular o apoderado, tutor, etc.)
                        </li>
                        <li>
                            Datos de contacto: Email, teléfono y operadora.
                        </li>
                    </ul>
                    <li>
                        En el cuadro siguiente, vas a tener que presionar el botón AGREGAR OTRA CEDULA para agregar los datos de las persona a autorizar y tambíen confirmar si es Persona Humana o JurÍdica.
                        Los datos solicitados son: nombre completo y DNI
                    </li>
                    <li>
                        Una vez terminado el paso anterior, solo queda presionar el botón CONTINUAR para confirmar el turno.
                    </li>
                </ol>                */}

            </>
        }/>
    )
}