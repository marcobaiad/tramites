import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));
const Relacionados = React.lazy(() => import('../../components/Relacionados'));
const imgMontoAsignaciones = require('../../assets/Anses/Creditos/montoasignaciones.webp')

export default function AuhSuaf() {
    
    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <MainDiv page={
        <>
            <Helmet description="¿Querés sacar un prestamo ANSES para AUH o SUAF? En tramitero.com te ayudamos a sacar el crédito de ANSES con nuestra guía rápida. Entrá ahora" contextUrl="index, follow" title="Prestamo ANSES para AUH y SUAF" />
            <h1>Crédito ANSES para AUH y SUAF</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre sacar el préstamo para Asignación Familiar por Hijo y en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>Quien puede acceder</li>
                        <li>Requisitos</li>
                        <li>Como realizar el trámite</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            <p>ANSES <strong>El préstamo para asignación universal por hijo y asignación familiar por hijo:</strong> es una linea de créditos a tasa fija, mucho menor a la de cualquier banco del país. Una vez aceptada la solicitud del mismo será acreditado por cuenta bancaria en un plazo no mayor a 5 días hábiles. El sistema de amortización, es el sistema frances.</p>
            <p>Si estás interesado en pedir un prestamo y cumplís con los requisitos, la primera opción a evaluar debería ser esta.</p>
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                <Indice 
                    description1="¿Cuales son los requisitos para acceder?"
                    description2="Pasos para acceder al Crédito 2020" 
                    description3="Monto máximo y Cuotas para el prestamo"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
               />
            </Suspense>            
            <h2 className="my-3" ref={titulo1}>¿Cuáles son los requisitos para préstamo ANSES AUH y SUAF?</h2>
            <ul>
                <li>
                    El solicitante debe ser mayor de 18 años.
                </li>
                <li>
                    El solicitante tener menos de 75 años al momento de finalizar el crédito.
                </li>
                <li>
                    En caso de cobrar Asignación familiar por hijo, debe haber presentado la Libreta en los dos años anteriores.
                </li>
                <li>
                    Los hijos con discapacidad por los que se solicita el crédito deben tener vigente el Certificado Único
                    por Discapacidad (CUD).
                </li>
            </ul>
            <p>Existen dos formas de solicitar el crédito: online o presencial con turno. Recomendamos fuertemente solicitar el <strong>crédito de forma online</strong> para evitar salir de casa y cumplir con el protocolo de seguridad social.</p>
            <h2 ref={titulo2}>Pasos para sacar el crédito online en ANSES</h2>
            <ol className="my-3">
                <li>Ingresa a <a href="https://servicioscorp.anses.gob.ar/clavelogon/logon.aspx?system=mianses">MI ANSES</a> con tu clave y contraseña de seguridad social.
                </li>
                <li>
                    Una vez hayas ingresado, a la izquiera verás un menú. Deberás buscar la opción que dice CRÉDITO ANSES e ingresar.
                </li>
                <li>
                    Aparecerá un cuadro que indica los montos y cuotas disponibles <strong>(Recorda que esto depende de la cantidad de hijos)</strong>.
                </li>
                <li>
                    Para tomar el crédito, solo deberás presionar el botón CONTINUAR y aceptar los términos y condiciones.
                </li>
            </ol>
            <p>ANSES aclara que si no recibe el dinero luego de los 5 días hábiles estipulados, puede deberse a una demora por la alta demanda de estos créditos. En caso de haber pasado 10 días hábiles (2 semanas) y aún no haber recibido el crédito es conveniente realizar el reclamo vía Mi ANSES o en forma telefónica/presencial.</p>
            <h3 ref={titulo3}>Montos crédito ANSES para AUH y SUAF</h3>
            <div className="alert alert-info border-info" role="alert">
                <strong>A tener en cuenta:</strong> la cuota del crédito <strong>NO</strong> puede superar el 20% de tu ingreso mensual.
            </div>
            <img className="img-fluid" src={imgMontoAsignaciones} alt="Tabla de monto y cuotas para crédito ANSES para AUH y SUAF" title="Tabla de monto y cuotas para crédito ANSES para AUH y SUAF"/>
            <Suspense fallback={
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Cargando...</span>
            </div>
            }>
                <Relacionados 
                    tituloRel1="Crédito ANSES para Jubilados y Pensionados" textRel1="¿Cómo acceder al crédito ANSES para Jubilados y Pensionados? ¿Cuáles son los requisitos? ¿Qué documentación necesito?" pathToRel1="/anses/prestamo-jubilados-y-pensionados" 
                    tituloRel2="Crédito ANSES para Pensión no Contributiva" textRel2="¿Cómo realizar el trámite? ¿Qué documentación necesito?" pathToRel2="/anses/prestamo-pension-no-contributiva" 
                    tituloRel3="Fondo de Desempleo" textRel3="¿Cómo cobrar Fondo de Desempleo? ¿Cómo realizar el trámite? ¿A quien le corresponde? Entrá ahora y enterate todo sobre el Fondo de Desempleo." pathToRel3="/anses/seguro-de-desempleo" 
                    tituloRel4="Tarjeta Alimentaria ANSES" textRel4="¿A quien le corresponde la Tarjeta Alimentaria? ¿Cómo hacer el trámite? Entrá y corroborá como solicitar tu tarjeta." pathToRel4="/anses/tarjeta-alimentaria" 
                />
            </Suspense>
        </>}
        />
    )
}