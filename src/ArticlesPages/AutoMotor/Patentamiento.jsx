import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

function Patentamiento() {
    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <MainDiv page={
            <>
                <Helmet description="¿Estás por comprar un vehículo nuevo y querés saber como patentarlo? En Tramitero.com te ayudamos a sacar tus dudas con nuestra guía rápida" contextUrl="index, follow" title="Patentamiento DNRPA" />
                <h1 className="text-center">Patentamiento DNRPA 0 Km</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como patentar un vehículo en 2020. </p> 
                    <div className="card-body">
                    <strong>¿Qué vas a encontrar?</strong>
                        <ul>
                            <li>Que necesito</li>
                            <li>Cuanto cuesta</li>
                            <li>Como se calcula</li>
                        </ul>
                        Continua leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                Cuando se adquiere un vehículo nuevo 0 km, es necesario <strong>inscribir el dominio del automotor</strong> a nombre de una persona o más, ya sea auto, moto o maquinaria vial con el objetivo de poder circular.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice description1="¿Qué documentación necesito?" 
                        description2="Valor de patente 2020"
                        description3="¿Cómo se calcula el valor de una patente?" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h2 ref={titulo1}>¿Qué necesito para patentar un auto 0 km?</h2>
                La documentación necesaria para dar de alta un auto nuevo en Argentina es la siguiente:
                <ul>
                    <li>
                        Los argentinos deberán presentar DNI. En caso de ser extrajero deberás presentar el pasaporte o DNI de paises limítrofes.
                    </li>
                    <li>
                        En caso de ser representante legal o apoderado deberás presentar documentación que acredite esa representación.
                    </li>
                    <div className="alert alert-primary border-info my-3" role="alert">
                        <strong>Importante: </strong>Todos los documentos mencionados deberán ser el documento original y copia certificada. 
                    </div>
                    <li>
                        Constancia de CUIL/CUIT o CDI. 
                        <ul>
                            También es necesario acreditar estos documentos.
                            <li>
                                El CUIL/CUIT deberá coincidir con el DNI presentado, el mismo deberá ser emitido por la AFIP o en su defecto por la ANSES. Constancia con sello y firma de la Autoridad Administrativa. Formulario de presentación con sello de recepción del organismo receptivo.
                            </li>
                            <li>
                                En caso de presentar CDI: será necesario llevar el <strong>Forumlario N° 663</strong> o <strong>Forumlario 622</strong>.
                            </li>
                        </ul>
                    </li>
                    <li>Documentación brindada por el lugar donde adquiriste el vehículo.
                        <ul>
                            <li>
                                Formulario 12: para adquirirlo debés realizar la verificación en alguna platan policial verificada.
                            </li>
                            <li>
                                Cert. de fabricación si es un auto producido en el país o cert. de importación si es de origen extranjero.
                            </li>
                            <li>
                                Solicitud de tipo 01 Nacional o Importado.
                            </li>
                            <li>
                                Factura de compra (original y llevar un copia).
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2 ref={titulo2}>Argentina ¿Cuánto cuesta patentar un 0 km en 2020?</h2>
                Según la DNRPA el valor de patentar un vehículo en Argentina, depende de su valor de mercado sumado al valor de los aranceles de los trámites implicados. Hablamos de 1,5% para autos nacionales y de un 2% para autos importados. <br/>
                Si tenemos en cuenta lo anterior y que la mayoría de trámites relacionado con el patentamiento de un 0 km costaría al rededor de $20000.
                <strong>¿Cuales son los aranceles implicados?</strong>: Expedición de cédula, expedición de cedula azul (o autorizado), expedición de placa (chapa patente), alta impositiva, F N° 13, sellos e impuestos provinciales. Buscá el precio de los aranceles <a href="https://www.argentina.gob.ar/propiedadautomotor/aranceles" target="_blank" rel="noopener noreferrer">acá</a>. <br/>
                <h2 ref={titulo3}>¿Cómo calcular el valor de una patente 2020?</h2> Para poder calcular el valor de una patente, primero debemos estar seguros de 2 cosas: año de fabricación y cual es el valor de <a href="https://www.dnrpa.gov.ar/valuacion/informacion/01-01-2020.pdf" target="_blank" rel="noopener noreferrer">tabla</a> de la DNRPA. <br/>
                Lugo vamos a tener en cuenta estos aspectos:
                <ul>
                    <li>
                        Autos de $580.000 de valuación fiscal o menor. 3,2% de alicuota.
                    </li>
                    <li>
                        Valor fiscal mayor a $580.000 pero menor a $800.000. 4% de alicuota. 
                    </li>
                    <li>
                        Mayor de $800.000 a $1.900.000. 4,5% de alicuota.
                    </li>
                    <li>
                        Valor fiscal mayor a $1.900.000. 5% de alicuota.
                    </li>
                </ul> 
                Recorda que podes usar el <a href="https://www2.jus.gov.ar/dnrpa-site/#!/estimador" target="_blank" rel="noopener noreferrer"><strong>estimador de precios dnrpa</strong></a> eligiendo la opción de "Inscripción Inicial de 0KM" 
                <div className="alert alert-primary border-info my-3" role="alert">
                    <strong>Ejemplo sencillo </strong> Voyage 2014: <br/>
                        <ul>
                            <li>Motor 1.6</li>
                            <li>4 puertas</li>
                            <li>valor de tabla $320.000</li>
                            <li>Alicuota 3,2%</li>
                        </ul>
                    Calculo: $320.000*0,32 = <strong>$10.240 valor año</strong> Los cuales se pagan en 6 cuotas.    
                </div>
            </>
        }/>
    );
}

export default Patentamiento;