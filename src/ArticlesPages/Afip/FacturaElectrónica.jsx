import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/indice'))

export default function FacturaElectronica() {

    const [iframeInView, setIframeInView] = React.useState(false); 

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    const InView = () => {
        const rect = titulo5.current.getBoundingClientRect();

        if (rect.top >= 0 && rect.left >= 0 && rect.right <= window.innerWidth && rect.bottom <= window.innerHeight) {
            setIframeInView(!iframeInView)
        } else {
            setIframeInView(iframeInView)
        }
    }

    React.useEffect(() => {
        InView()
    }, [])
    

    return (
        <MainDiv page={
        <>
            <Helmet description="¿Querés saber cómo generar tu Factura Electrónica? En tramitero.com te ayudamos con una guía super rápida y sencilla. Entrá ahora y termina tu trámite" contextUrl="index" title="Factura Electrónica ¿Cómo se hace?" />
            <h1 className="text-center">Factura Electrónica ¿Qué es?</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como tramiter la Factura Electrónica en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>Que necesito</li>
                        <li>Como se hace</li>
                        <li>Solicitar Autorización</li>
                        <li>Personas obligadas</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            La <strong>factura electrónica </strong>es un comprobante digital que permite la no impresión de la factura en papel, promoviendo una mayor gestion e intercambio fluido de las mismas por medios digitales. Esta <strong>factura</strong> tiene la misma validez legal que una factura en formato papel y se puede utilizar en la mayoría de las operaciones vigentes.
            <Suspense fallback={<div>Cargando...</div>}>
                <Indice 
                    description1="Documentación necesaria y Requisitos" 
                    description2="¿Como se hace paso a paso 2020?"
                    description3="Solicitar autorización para emitir Fact. Electrónica" 
                    description4="¿Quién está obligado a emitir esta factura?"
                    description5="¿Video explicativo de como Sacar Factura Electrónica"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                    nodo4={titulo4}
                    nodo5={titulo5}
               />
            </Suspense>
            <h2 ref={titulo1}>¿Qué documentación necesito para hacer mi factura Electrónica de AFIP?</h2>
            Para hacer la factura electrónica, debemos tener en cuenta el tipo de destinatario y el monto de la operación. <br /> En caso de tratarse de un <strong>consumidor final</strong>: operación mayor de $7690 realizado por medios no autorizados o el monto de la factura superase o equipare los $15380 por alguno de los medios autorizados, los datos a incluir en la factura son:
            <ul className="my-3">
                <li>Nombre Completo</li>
                <li>Domicilio</li>
                <li>CUIT/CUIL/CDI</li>
            </ul>
            <div className="alert alert-info border-primary" role="alert">
                <strong>A tener en cuenta: </strong> Los medios autorizados emitir facrura electrónica son Tarjetas de Débito/ Crédito/ Prespagas no bancarias y transferencia de pago instrumentada.
            </div>
            La factura para responsable inscrito deberá identificar al cliente, siempre y cuando la operación fuese igual o menor a $7690 y la operación se efectuara en el marco de la comercialización mayorista por algún medio autorizado.
            <h2 ref={titulo2}>¿Cómo se hace una factura Electrónica de AFIP?</h2>
            Para inciar el trámite, primero es necesario habilitar los <strong>Puntos de Ventas</strong> en la página de AFIP ingresando con tu <a href="https://tramitero.com/Afip/clave-fiscal">Clave Fiscal</a>.
            Pasos para habilitar Puntos de Ventas AFIP:
            <ol className="my-3">
                <li>
                    Una vez hayas ingresado a la web de AFIP, podrás ver la lista de servicios disponibles, deberás elegir la opción de <strong>Comprobantes en Línea</strong> y luego la opción que corresponda según tu categoría de monotributista para desplegar el menú del <strong>Regimen de Comprobantes en Linea</strong>.
                </li>
                <li>
                    Dentro de éste menú vas a seleccionar la opción de <strong>Datos adicionales del Comprobante</strong> donde vas a completar los datos de la siguiente imagen: 
                    <div className="row justify-content-center mx-0 my-3">
                        <img className="img-fluid" loading="lazy" src={require('../../assets/AFIP/Factura Electrónica/Factura Electronica AFIP 0.webp')} alt=""/>
                    </div>
                    Luego presioná en GUARDAR
                </li>
                <li>
                    Ahora debés ingresar a <strong>ABM Puntos de Ventas</strong>, para elegir el tipo de factura a emitir, una vez hayas elegído presioná el botón Contiuar.
                    <div className="row justify-content-center mx-0 my-3">
                        <img className="img-fluid" loading="lazy" src={require('../../assets/AFIP/Factura Electrónica/Factura Electronica AFIP 2.webp')} alt=""/>
                    </div>
                    Luego presioná en GUARDAR
                </li>
                <li>
                    Volverá a abrirse la misma pantalla del paso 2 y esta vez tendrás que elegir la opción de <strong>Generar Comprobantes</strong>. Completá los datos requeridos y presioná en CONTINUAR.
                    <div className="row justify-content-center mx-0 my-3">
                        <img className="img-fluid" loading="lazy" src={require('../../assets/AFIP/Factura Electrónica/Factura Electronica AFIP 3.webp')} alt=""/>
                    </div>
                </li>
                <li>
                    Completa los datos de la persona que recibirá la factura y como se efectuó la venta. (De contado, con tarjeta de crédito / débito, cheque, etc.) y presioná CONTINUAR.
                    <div className="row justify-content-center mx-0 my-3">
                        <img className="img-fluid" loading="lazy" src={require('../../assets/AFIP/Factura Electrónica/Factura Electronica AFIP 4.webp')} alt=""/>
                    </div>
                </li>
            </ol>
            Una vez realizado los pasos mencionados anteriormente, solo resta comprobar que los datos ingresados durante el proceso sean correctos y presionar el botón de Confirmar Datos.
            <br/>
            <h2 ref={titulo3}>¿Cómo solicitar autorización para emitir factura Electrónica?</h2>
            <strong>¿Qué documentación necesito?</strong>
            <ul className="my-3">
                <li>
                    CUIT/ CUIL/ CDI
                </li>
                <li>
                    Clave Fiscal Nivel 3 (enterate como sacarla desde <a className="font-weight-bold" href="https://tramitero.com/Afip/clave-fiscal" target="_blank" rel="noopener noreferrer">acá</a>)
                </li>
                <li>
                    Contar con los servicios necesarios habilitados en tu clave fiscal. 
                </li>
            </ul>
            La solicitud para emitir este tipo de factura deberá realizarse por: 
            <ul className="my-3">
                <li>
                    Web Service de Factura Electrónica o
                </li>
                <li>
                    Con Clave Fiscal en el menú Comprobantes en línea.
                </li>
            </ul>
             {false && 
             <div>
             <br />
             Consideraciones según tipo de Factura a emitir:

             Algunos aspectos a considerar a la hora de solicitar 
            <ul className="my-2">
                <strong>Factura Tipo A: </strong>
                <ul>
                    <li>
                        Un registro por cada factura, no se contempla el importe.
                    </li>
                    <li>
                        En caso de detectar inconsistencias en el proceso de autorización, se asignará un CAE (Código de Autorización Electrónico) con el o los códigos de de irregularidades. El impuesto discriminado en estos comprobantes en particular, no podrá computarse como crédito fiscal del IVA.

                    </li>
                </ul>
            </ul>
            <ul className="my-2">
                <strong>Factura tipo B</strong>
                <ul>
                    <li>Un registro por cada importe mayor a $1000.</li>
                    <li>
                        Si el importe es menor a $1000, un registro por lote con la suma de los montos.
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </ul>
            </div>
            }
            <h3 ref={titulo4}>¿Quienes están obligados a emitir por la AFIP este comprobante?</h3>
            Estan alcanzadas todas las categorias del monotributo, Inscriptos en el Impuesto al Valor Agregado, Actividades comprendidas en el anexo de la RG 3749, exportadores por la RG 2758 y quienes comercializan bienes usados no registrables enmarcados en la RG 3411. <br/>
            <strong>¿Quines estan exceptuados?</strong> Aquellas personas que están dentro del Régimen de inclusión Social y Promoción de Trabajo indepentiente.
            <div className="d-flex flex-column align-items-center justify-content-center my-5">
                <h4 className="mb-3 text-center" ref={titulo5}>Video explicativo de como emitir Factura Electrónica</h4>
                <br/>
                {
                    iframeInView ?
                        <div className="align-self-center embed-responsive embed-responsive-16by9 w-75 h-75">
                            <iframe width="560" height="315" title="Como Emitir Factura Electrónica?" src="https://www.youtube.com/embed/rodjvaubjBs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    :
                    <div className="row justify-content-center mx-0">
                        <br/>
                        <button className="btn btn-info font-weight-bold" onClick={() => setIframeInView(true)}>Click para ver el Video</button>

                    </div>
                }
            </div>
        </>}
        />
    )
}