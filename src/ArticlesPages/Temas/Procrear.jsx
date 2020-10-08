import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));
export default function Procrear() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);


    const Entrada = (props) => {
        const {linkEntrada, textEntrada, tituloEntrada} = props;
        return(
            <div className="card border-info rounded-lg col-12 col-md-10 my-2">
                <Link className="text-decoration-none text-dark" to={`${linkEntrada}`}>
                    <div className="card-body">
                        <h4>{tituloEntrada}</h4>
                        <p>{textEntrada}</p>
                    </div>
                </Link>
            </div>
        )
    }
    
    const EntradaExt = (props) => {
        const {linkEntrada, textEntrada, tituloEntrada} = props;
        return(
            <div className="card border-info rounded-lg col-12 col-md-10 my-2">
                <a className="text-decoration-none text-dark" href={`${linkEntrada}`} target="_blank" rel="noopener noreferrer">
                    <div className="card-body">
                        <h4>{tituloEntrada}</h4>
                        <p>{textEntrada}</p>
                    </div>
                </a>
            </div>
        )
    }

    return (
        <MainDiv page={
            <>
                <Helmet description="Esta es una guía completa sobre como acceder al PROCREAR en 2020. Conocé en detalle cada Crédito Personal e Hipotecario del PROCREAR disponible" contextUrl="index, follow" title="¿Cómo acceder al PROCREAR en 2020?"
                />
                <h1 className="text-center">Procrear ¿cómo acceder en 2020?</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como acceder al Procrear en 2020.</p> 
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
                El plan <strong>Procrear</strong> fue lanzado en 2012 como politica nacional, con el objetivo de ayudar con el desarrollo urbano y habitacional brindando acceso a mejores condiciones del hábitat. Cabe destacar que esta linea de crédito es de caracter federal ya que está dirigida a todos los habitantes del país y el objetivo principal es el mejoramiento de la vivienda existente y viviendas nuevas en desarrollos urbanísticos.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice 
                        description1="Objetivos y Lineamientos" 
                        description2="Créditos Personales"
                        description3="Créditos Hipotecarios" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h4 ref={titulo1}>
                Como objetivos y lineamientos dentro dentro de este plan encontramos ligados los siguientes intereses:
                </h4>
                <p><strong>Actualización de la agenda urbana:</strong></p>
                <p>Con el Procrear se intenta reforzar el compromiso con la inclusión de aquellas personas con discapacidad, las identidades locales, y la perspectiva de género.
                Profundiza siempre en sus criterios en términos de ahorro de recursos esenciales  para la sustentabilidad medioambiental como el acceso al agua y la energía en general.</p>

                <p><strong>Dinamización de la economía:</strong></p>
                <p>Con el objetivo de dotar de previsibilidad a los créditos otorgados, Procrear suplantó a la formula de UVA's por HogAR. También reconoce el papel fundamental del proceso de la construcción, ya que impulsa actividades como: generación de empleo, la comercialización, la industria nacional, las economías locales, etc.</p>
                <p><strong>Integralidad de los proyectos:</strong></p>
                <p>El objetivo de brindar soluciones que atiendan especificamente a la particularidad de cada provincia es uno de los ejes principales del Procrear, orientado a brindar una solución habitacional a quienes no pueden acceder a una vivienda a través del mercado inmobiliario.</p>
                <p>Debemos tener en cuenta que dentro de este beneficio existen dos tipos de créditos: <strong>Personales</strong> e <strong>Hipotecarios</strong></p>
                <h2 className="my-2" ref={titulo2}>Créditos Personales Procrear</h2>
                Estos créditos están destinados al mejoramiento del hogar y están divididos de la siguiente manera:
                <div class="alert alert-info border-primary my-2 col-12 col-md-10" role="alert">
                    <strong>Diferencia con Crédito Hipotecario: </strong> <br/>
                    <ul className="my-2">
                        <li>El monto suele ser menor</li>
                        <li>El plazo para la devolución suele ser menor</li>
                        <li>Mayor cuota a devolver</li>
                    </ul>
                </div>
                <Entrada tituloEntrada="Crédito para compra de Materiales para arreglos y terminaciones en la vivienda" textEntrada="El objetivo de este crédito es mejorar viviendas (filtraciones, instalaciones de gas, pintura, etc). Este tipo de crédito presenta un 24% de tasa de Interes Fija." linkEntrada="/procrear/credito-personal-compra-materiales" />
                <Entrada tituloEntrada="Crédito para Refacción de la Vivienda" textEntrada="El objetivo es mejorar las condiciones habitacionales (instalación de gas, sanitaria, eléctrica, etc.). Tasa de Interes fija del 24%." linkEntrada="/procrear/credito-para-refaccion" />
                <Entrada tituloEntrada="Crédito para Incremento de la Eficiencia Energética del Hogar" textEntrada="Éste crédito está orientado a realizar mejoras en la eficiencia energética del hogar, la seguridad y el confort térmico." linkEntrada="/procrear/credito-hogar-sustentable" />
                <Entrada tituloEntrada="Crédito para instalacion domiciliaria de gas de red" textEntrada="" linkEntrada="/procrear/credito-para-mejora-gas" />
                <h2 className="my-3" ref={titulo3}>Créditos Hipotecarios Procrear</h2>
                <div class="alert alert-info border-primary col-12 col-md-10" role="alert">
                    <strong>Diferencia con Crédito Personal: </strong> <br/>
                    <ul className="my-2">
                        <li>El monto suele ser más alto</li>
                        <li>El plazo para la devolución suele ser mayor</li>
                        <li>Las cuotas son más bajas</li>
                    </ul>
                </div>
                <Entrada tituloEntrada="Crédito para construcción de Viviendas" textEntrada="El objetivo de éste crédito es la construccion de viviendas de no más de 60 m² (materiales y mano de obra)." linkEntrada="/procrear/credito-para-construccion" />
                <Entrada tituloEntrada="Crédito para Ampliacion de Viviendas" textEntrada="Ampliar viviendas por no más de 30 m²." linkEntrada="/procrear/credito-para-ampliacion" />
                <EntradaExt tituloEntrada="Crédito para Desarrollo Habitacionales" textEntrada="Posibilita el acceso a una vivienda dentro del plan Procrear." linkEntrada="https://www.argentina.gob.ar/habitat/procrear/desarrollos-habitacionales" />
                <EntradaExt tituloEntrada="Crédito para desarrollo Urbanístico" textEntrada="El objetivo es brindar acceso a la compra de viviendas nuevas dentro del plan Procrear." linkEntrada="https://www.argentina.gob.ar/habitat/procrear/desarrollosurbanisticos" />
                <EntradaExt tituloEntrada="Crédito para Lotes con servicios" textEntrada="Adquirir un terreno para la construcción de una vivienda." linkEntrada="https://www.argentina.gob.ar/habitat/procrear/lotesconservicios" />
            </>
        }/>
    );
}

