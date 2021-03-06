import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));
const Relacionados = React.lazy(() => import('../../components/Relacionados'));

const FormularioCeta = () => {

    const [iframeInView, setIframeInView] = React.useState(false); 

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);
    const titulo6 = React.useRef(null);
    const titulo7 = React.useRef(null);

    // const InView = () => {
    //     const rect = titulo7.current.getBoundingClientRect();

    //     if (rect.top >= 0 && rect.left >= 0 && rect.right <= window.innerWidth && rect.bottom <= window.innerHeight) {
    //         setIframeInView(!iframeInView)
    //     } else {
    //         setIframeInView(iframeInView)
    //     }
    // }

    // React.useEffect(() => {
    //     InView()
    // }, [])

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <MainDiv page={
        <>
            <Helmet description="¿Cómo hacer el formularo CETA? Con clave Fiscal, sin clave fiscal. En tramitero.com te ayudamos con una guía super rápida. Entrá ahora." contextUrl="index, follow" title="AFIP CETA ¿Cómo hacer el Formulario CETA de AFIP 2020?" />
            <h1 className="font-weight-bold py-5 text-center">Formulario CETA ¿qué es?</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como tramitar el Formulario CETA en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>Que necesito</li>
                        <li>Como se hace</li>
                        <li>Pasos a paso del trámite</li>
                        <li>Personas obligadas</li>
                        <li>Con clave Fiscal</li>
                        <li>Sin Clave Fiscal</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            <p>El <strong>Certificado de Transferencia de Automotores</strong>, es un formulario de <a href="https://afip.gob.ar" target="_blank" rel="noopener noreferrer">AFIP</a> que se necesita a la hora de hacer la transferencia de un auto. <strong ref={titulo5}>¿Quien tiene que hacer el formulario CETA?</strong> El vendendor es el que deberá tramitar este certificado. Están alcanzadas: personas humanas, las suceciones indivisas (herederos) y personas jurídicas, que recidan en el país o en el exterior y quieran realizar la transferencia parcial o total de su dominio.</p>
            <Suspense fallback={
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>}
            >
                <Indice 
                    description1="¿Cuándo es necesario sacar el Formulario?" 
                    description2="¿Cómo se hace el formulario Z en 2020?"
                    description3="Sacar Formulario Ceta Sin Clave Fiscal 2020" 
                    description4="Sacar Formulario Ceta Con Clave Fiscal 2020"
                    description5="¿Quienes están obligados a sacar este formulario?"
                    description6="¿Quienes están excentos a sacar este formulario?"
                    description7="Video explicativo para Sacar Form. Ceta"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                    nodo4={titulo4}
                    nodo5={titulo5}
                    nodo6={titulo6}
                    nodo7={titulo7}
               />
            </Suspense>
            <h2 className="font-weight-bold" ref={titulo1}>¿Cuándo es necesaro sacar el formulario CETA?</h2>
            <p>Si estás buscando como se trámitar el ceta, debes saber que el mismo se presenta a partir de cierto monto, el cual se va actualizando año a año y para llevar un registro más detallado, y que sea más fácil de leer, es que abajo iremos dejando los valores según el año en el que se quiera realizar la transferencia del vehículo.</p>
            <div className="alert alert-info" role="alert">
                <strong>Monto a partir de 2020: </strong> Condiciones 2019 vigentes.
            </div>
            <div className="alert alert-info" role="alert">
                <strong>Monto a partir de 2019: </strong> El formulario ceta es obligatorio si el importe de la venta supera la suma de $800.000 (Ocho Cientos Mil pesos Argentinos). Si se pactara en moneda extranjera, se deberá realizar la conversión a valor de la moneda local con la cotización del <strong>Banco de la Nación Argentina</strong> del día hábil inmediatamente anterior al acto de transferencia.
            </div>
            <h2 className="font-weight-bold" ref={titulo2}>Formulario CETA ¿Cómo Hacerlo?</h2>
            <p>Para hacer el trámite del <strong>formulario CETA online</strong> tendrás que ingresar a la página de AFIP. Tené en cuenta podrás realizarlo de dos de dos maneras: </p>
            <ol className="nav flex-column mb-3">
                <li className="nav-item" role="presentation">
                    <button type="button" onClick={() => titulo2.current.scrollIntoView()} className="btn btn-link">Sin Clave Fiscal:</button>podrás completar el trámite sin necesidad de clave fiscal.
                </li>
                <li className="nav-item" role="presentation">
                    <button type="button" onClick={() => titulo3.current.scrollIntoView()} className="btn btn-link">Con Clave Fiscal:</button>para poder completar el trámite necesitas de una clave fiscal nivel 2.
                </li>
            </ol>

            <h2 className="font-weight-bold" id="sinclave" ref={titulo3}>
                ¿Cómo sacar formulario ceta sin Clave Fiscal?
            </h2>
            <p>Guía detallada de como realizar este trámite paso a paso.</p>
            <div className="" id="accordion" role="tablist">
                <div className="card w-100">
                    <button
                        className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso1" aria-expanded="true" aria-controls="paso1">
                        Paso N° 1 de 4
                            </button>
                    <div id="paso1" className="collapse show" role="tabpanel" aria-labelledby="paso1">
                        <div className="card-body">
                            <div className="row mx-0 justify-content-center">
                                <p className="">Ingreá al servicio CETA desde la web de AFIP (o ingresá directamente desde el siguiente link <a href="https://cetaweb.afip.gob.ar/#/" target="_blank" rel="noopener noreferrer">cetaweb.afip.gob.ar/</a>).</p>
                                <p>Completa el primer campo con el número de paténte de tu auto y presiona el botón CONFIRMAR</p>
                                <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 1 CETA.webp")} alt="Paso 1 formulario CETA" title="Paso 1 para solicitar el formulario CETA" />
                                <p>Se desplegarán los siguientes campos, los cuales deberás completar para poder avanzar. Una vez verificado que todo esté correcto, deberás presionar en el botón CONTINUAR</p>
                                <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 1 ceta2.webp")} alt="Paso 1 formulario CETA" title="Paso 1/2 para solicitar el formulario CETA" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" id="accordion" role="tablist">
                    <div className="card w-100">
                        <button
                            className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso2" aria-expanded="true" aria-controls="paso2">
                            Paso N° 2 de 4
                            </button>

                        <div id="paso2" className="collapse" role="tabpanel" aria-labelledby="paso2">
                            <div className="card-body">
                                <div className="row mx-0 justify-content-center">
                                    <p className="text-center">Ahora toca ingresar el número de CUIT/CUIT/CDI de la persona que transfiere el bien, una vez completado el dato, presioná el botón de AGREGAR TITULAR.</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 2 ceta.webp")} alt="Paso 2 formulario CETA" title="Paso 2 para solicitar el formulario CETA" />
                                    <p>Lo siguiente es completar el porcentaje de titularidad que te corresponde por sobre el vehículo y el porcentaje que estás vendiendo. Ahora debés presionar en CONTINUAR</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 2 CETA 2.webp")} alt="Paso 2 formulario CETA" title="Paso 2/2 para solicitar el formulario CETA" />
                                    <p>En caso de que necesites agregar otro titular, podrás hacerlo clickeando el botón AGREGAR TITULAR </p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 2 CETA 3.webp")} alt="Paso 2 formulario CETA" title="Paso 2/3 para solicitar el formulario CETA" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" id="accordion" role="tablist">
                    <div className="card w-100">
                        <button
                            className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso3" aria-expanded="true" aria-controls="paso3">
                            Paso N° 3 de 4
                                </button>
                        <div id="paso3" className="collapse" role="tabpanel" aria-labelledby="paso3">
                            <div className="card-body">
                                <div className="row mx-0 justify-content-center">
                                    <p>En este paso debés agregar los datos de quien compra el vehículo. Colocá el CUIT/CUIL/CDI y presioná sobre AGREGAR ADQUIRENTE</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 3 CETA.webp")} alt="Paso 3 formulario CETA" title="Paso 3 para solicitar el formulario CETA" />
                                    <p>Una vez hecho lo anterior, aparecerá un nuevo campo donde deberás agregar el porcentaje de adquirencia y guardá los datos.</p>
                                    <p>Recuerda que puedes agregar otro adquirente presionando en AGREGAR ADQUIRENTE. En caso de habér terminado, presionar CONTINUAR.</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 3 CETA 3.webp")} alt="Paso 3 formulario CETA" title="Paso 3 para solicitar el formulario CETA" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" id="accordion" role="tablist">
                    <div className="card w-100">
                        <button
                            className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso4" aria-expanded="true" aria-controls="paso4">
                            Paso N° 4 de 4
                                </button>
                        <div id="paso4" className="collapse" role="tabpanel" aria-labelledby="paso4">
                            <div className="card-body">
                                <div className="row mx-0 justify-content-center">
                                    <p>Ya estás en el último paso. Recorda verificar que todos los datos ingresados sean correctos.</p>
                                    <p>Es recomendable dejar una dirección de mail para recibir un resumen del trámite (presioná el botón ENTER para confirmar tu mail).</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 4 CETA.webp")} alt="Paso 4 formulario CETA" title="Paso 4 para solicitar el formulario CETA" />
                                    <p>Abajo te dejo un ejemplo de como se vería la pantalla final. Recordá que no hace falta imprimir el ceta y tampoco debés presentarlo el día del trámite.</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta sin clave/paso 4 CETA 1.webp")} alt="Paso 4/2 formulario CETA" title="Paso 4 para solicitar el formulario CETA" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="font-weight-bold" id="conclave" ref={titulo4}>¿Cómo sacar el Formulario Ceta Con Clave Fiscal?</h2>
            <p className="font-weight-bold">Sacar formulario ceta guía paso a paso: </p>
            <div className="" id="accordion" role="tablist">
                <div className="card w-100">
                    <button
                        className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso1" aria-expanded="true" aria-controls="paso1">
                        Paso N° 1 de 4
                            </button>
                    <div id="paso1" className="collapse show" role="tabpanel" aria-labelledby="paso1">
                        <div className="card-body">
                            <div className="row mx-0 justify-content-center">
                                <p className="">Deberás ingresar a la página de AFIP (puedes hacerlo desde acá <a href="https://afip.gob.ar/" target="_blank" rel="noopener noreferrer">afip.gob.ar</a>). </p>
                                <p>Inicia sesión con tu Clave Físcal y una vez dentro, deberás acceder la opción "Transferencia de Bienes Muebles Registrables"</p>
                                <p>Cuando hayas accedido, te aparecerán las siguientes opciones y deberás elegir la primera</p>
                                <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta con clave/paso 1 ceta con clave fiscal.webp")} alt="Paso 1 formulario CETA" title="Paso 1 para solicitar el formulario CETA con clave fiscal" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" id="accordion" role="tablist">
                    <div className="card w-100">
                        <button
                            className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso2" aria-expanded="true" aria-controls="paso2">
                            Paso N° 2 de 4
                                </button>
                        <div id="paso2" className="collapse" role="tabpanel" aria-labelledby="paso2">
                            <div className="card-body">
                                <div className="row mx-0 justify-content-center">
                                    <p className="text-center">Ahora tocá la opción de "Emisión de Certificado".</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta con clave/paso 2 ceta con clave fiscal.webp")} alt="Paso 2 formulario CETA con clave fiscal" title="Paso 2 para solicitar el formulario CETA sin clave fiscal" />
                                    <p>Lo siguiente es seleccionar el tipo de vehículo y completar el campo "Dominio" con el N° de patente del mismo. Luego presionar en ACEPTAR.</p>
                                    <p>Ahora en tu pantalla, verás un formulario que deberás completar para poder avanzar con el trámite. Una vez que lo hayas rellenado completamente, vas a presionar nuevamente el botón ACEPTAR.</p>
                                    <div className="alert alert-info" role="alert">
                                        Recordá que podes agregar otro adquirente haciendo click el botón Agregar Adquirente
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" id="accordion" role="tablist">
                    <div className="card w-100">
                        <button
                            className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso3" aria-expanded="true" aria-controls="paso3">
                            Paso N° 3 de 4
                                </button>
                        <div id="paso3" className="collapse" role="tabpanel" aria-labelledby="paso3">
                            <div className="card-body">
                                <div className="row mx-0 justify-content-center">
                                    <p>En este paso deberás corroborar que todos los datos ingresados durante el trámite sean correctos. Una vez que estés seguro de que es así, presioná sobre el botón ACEPTAR</p>
                                    <img className="img-fluid" loading="lazy" src={require("../../assets/Ceta con clave/paso 3 ceta con clave fiscal.webp")} alt="Paso 3 formulario CETA con clave fiscal" title="Paso 3 para solicitar el formulario CETA con clave fiscal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" id="accordion" role="tablist">
                    <div className="card w-100">
                        <button
                            className="w-100 font-weight-bold btn bg-grad" data-toggle="collapse" data-target="#paso4" aria-expanded="true" aria-controls="paso4">
                            Paso N° 4 de 4
                                </button>
                        <div id="paso4" className="collapse" role="tabpanel" aria-labelledby="paso4">
                            <div className="card-body">
                                <div className="row mx-0 justify-content-center">
                                    <p>Ya estás en el último paso. Ahora solo resta imprimir el documento generado haciendo click en el botón IMPRIMIR</p>
                                    <div className="alert alert-info" role="alert">
                                        <strong>Importante: </strong> El código generado deberá ser consignado en el rubro "Observaciones" de la solicitud que corresponda ser presentada en el Registro de la Propiedad del Automotor y créditos prendarios.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="mt-5" ref={titulo6}>¿Quienes están excentos a realizar el CETA?</h2>
            <p className="ml-2">Se encuentran axceptuados de realiazar este trámite los siguientes Sujetos</p>   
            <div className="row justify-content-md-around">
                <div className="col-12 col-md-4">
                    <p className="ml-2">Estados: </p>
                    <ul>
                        <li>Nacional</li>
                        <li>Prinvicial</li>
                        <li>Municipales y</li>
                        <li>La Ciudad Autonoma de Bs. As.</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <p className="ml-2">Misiones Diplomáticas acreditadas antes: </p>
                    <ul>
                        <li>Est. Nacional</li>
                        <li>Agentes Consulares y</li>
                        <li>Representates oficiales de otros países</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <p className="ml-2">Instituciones religiosas: </p>
                    <ul>
                        <li className="text-break">Comprendidas en el art 20 de la Ley de Impuesto a las ganancias</li>
                    </ul>
                </div>
            </div>
            {/* <div className="d-flex flex-column align-items-center justify-content-center my-5">
                <h4 className="mb-3 text-center" ref={titulo7}>Video explicativo de como sacar formulario CETA</h4>
                <br/>
                {
                    iframeInView ?
                        <div className="align-self-center embed-responsive embed-responsive-16by9 w-75 h-75">
                            <iframe width="560" height="315" title="¿Cómo sacar Fomulario CETA?" src="https://www.youtube.com/embed/1otMtAPtkxI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    :
                    <div className="row justify-content-center mx-0">
                        <br/>
                        <button className="btn btn-info font-weight-bold" onClick={() => setIframeInView(true)}>Click para ver el Video</button>

                    </div>
                }
            </div> */}
            <h5 className="my-4 font-weight-bold">Temas Relacionados</h5>
            <Suspense fallback={
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
            }>
                <Relacionados 
                    tituloRel1="Cédula Azul" textRel1="¿Cómo sacar la Cédula Azul? ¿Cuáles son los requisitos? ¿Qué documentación necesito?" pathToRel1="/automotor/tramite-cedula-azul" 
                    tituloRel2="Patentar un Auto 0km" textRel2="¿Cómo Patentar un Auto en 0km 2020? ¿Cómo realizar el trámite? Entrá y enterate como se hace" pathToRel2="/automotor/patentamiento-automotor" 
                    tituloRel3="Duplicado Titulo Automotor" textRel3="¿Cómo sacar el duplicado del titulo automtor? ¿Te robaron o perdiste el tutilo de tu auto? Entrá y enterate como sacarlo de nuevo." pathToRel3="/automotor/titulo-automotor" 
                    tituloRel4="¿Cómo sacar turno en el Automotor?" textRel4="Entrá y corroborá como sacar turno en el Registro Automotor para cualquier trámite." pathToRel4="/automotor/turno-registro-automotor" 
                />
            </Suspense>
        </>}
        />
    )
}

export default FormularioCeta;