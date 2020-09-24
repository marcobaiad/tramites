import React, { } from "react";
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const imgMontosJubilados = require('../../assets/Anses/Creditos/montoJubilados.JPG')

export default function JubiladosPensionados() {

    return (
        <MainDiv page={
        <>
            <Helmet description="Préstamo para jubilados y pensionados ANSES. ¿Cómo acceder al crédito de ANSES? En trámitero.com te ayudamos a sacar el crédoto" contextUrl="index" title="Prestamo Jubilados ANSES" />
            <h1 className="text-center">Préstamo ANSES para Jubilados y Pensionados</h1>
            <p><strong>El crédito ANSES para jubilados y pensionados:</strong> es una linea de créditos a tasa fija, mucho menor a la de cualquier banco del país. Una vez aceptada la solicitud del mismo será acreditado por cuenta bancaria en un plazo no mayor a 5 días hábiles. El sistema de amortización, es el sistema frances.</p>
            <p>Si estás interesado en pedir un prestamo, la primera opción a evaluar debería ser esta.</p>
            <h2>Requisitos para acceder a este Crédito</h2>
            <ul>
                <li>El solicitante debe residir en el país</li>
                <li>El solicitante debe tener menos de 90 años al momento de finalizar el crédito.</li>
            </ul>
            <h3>¿Que documentación necesito para pedir el prestamo de Anses para Jubilados?</h3>
            <ul>
                <li>Deberás presentar tu <span className="font-weight-bold">DNI</span>, te recomendamos que llevar una copia del mismo por cualquier cosa. </li>
                <li>Tambíen deberás llevar tu <span className="font-weight-bold">N° de CBU</span>, el mismo se se obtiene desde cualquier cajero de la red de tu banco o desde el HomeBanking del mismo.</li>
            </ul>
            <h3>Monto de crédito Anses para Jubilados y Pensionados</h3>
            <div className="alert alert-info" role="alert">
                <strong>A tener en cuenta:</strong> la cuota del crédito <strong>NO</strong> puede superar el 20% de tu ingreso mensual.
            </div>
            <img className="img-fluid" src={imgMontosJubilados} title="Tabla de montos y plazos para crédito Anses Jibulados" alt="Tabla de montos para Crédito" />
            <h2>¿Cómo solicitar el Crédito ANSES Para Jubilados</h2>
            <ol>
                <li>Ingresa a <a href="https://servicioscorp.anses.gob.ar/clavelogon/logon.aspx?system=mianses">Mi ANSES</a>
                </li>
                {/* <a href="" target="blank"><img className="img-fluid my-3" src="../img/ASIGNACIONES/mianses.png" alt="Imagen Mi Anses" /></a>
                        <img className="img-fluid my-3" src="../img/CREDITOS/pasos para solicitar credito.PNG" alt="" /> */}
                <li>Aparecerá un cuadro que indica los montos y cuotas disponibles.</li>
                <li>
                    Para tomar el crédito presioná el botón CONTINUAR y aceptá los términos y condiciones.
                    </li>
                <li>
                    Con esos simples pasos ya tendrías tu crédito. En un plazo de hasta 5 días aparecerá el monto acreditado en tu cuenta
                    bancaria.
                    </li>
            </ol>
            <p>ANSES aclara que si no recibe el dinero luego de los 5 días hábiles estipulados, puede deberse a una demora por la alta demanda de estos créditos. En caso de haber pasado 10 días hábiles (2 semanas) y aún no haber recibido el crédito es conveniente realizar el reclamo vía Mi ANSES o en forma telefónica/presencial.</p>
        </>}
        />
    )
}