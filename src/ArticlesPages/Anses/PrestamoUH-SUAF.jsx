import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const imgMontoAsignaciones = require('../../assets/Anses/Creditos/montoasignaciones.JPG')

export default function AuhSuaf() {
    return (
        <MainDiv page={
        <>
            <Helmet description="¿Querés sacar un prestamo ANSES para AUH o SUAF? En tramitero.com te ayudamos a sacar el crédito de Anses con nuestra guía rápida. Entrá ahora" contextUrl="index" title="Prestamo ANSES AUH y SUAF" />
            <h1>Crédito ANSES para AUH y SUAF</h1>
            <p><strong>El préstamo ANSES para asignación universal por hijo y asignación familiar por hijo:</strong> es una linea de créditos a tasa fija, mucho menor a la de cualquier banco del país. Una vez aceptada la solicitud del mismo será acreditado por cuenta bancaria en un plazo no mayor a 5 días hábiles. El sistema de amortización, es el sistema frances.</p>
            <p>Si estás interesado en pedir un prestamo y cumplís con los requisitos, la primera opción a evaluar debería ser esta.</p>
            <p>Recorda que podes usar nuestro sistema de formularios inteligentes para saber rápidamente si aplicas o no para el crédito.</p>
            <h2>¿Cuáles son los requisitos para préstamo ANSES AUH y SUAF?</h2>
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
            <h2>Pasos para sacar el crédito online en ANSES</h2>
            <ol>
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
            <h3>Montos crédito ANSES para AUH y SUAF</h3>
            <div className="alert alert-info w-50" role="alert">
                <strong>A tener en cuenta:</strong> la cuota del crédito <strong>NO</strong> puede superar el 20% de tu ingreso mensual.
            </div>
            <img className="img-fluid" src={imgMontoAsignaciones} alt="Tabla de monto y cuotas para crédito ANSES para AUH y SUAF" title="Tabla de monto y cuotas para crédito ANSES para AUH y SUAF"/>
        </>}
        />
    )
}