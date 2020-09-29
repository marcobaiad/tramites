import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function GenerarVEP() {
    return(
        <MainDiv page={
            <>
            <Helmet description="¿Cómo generar el VEP de AFIP? En tramitero.com te ayudamos a hacerlo de la manera más rápida y sencilla. Entrá ahora y termina tu trámite" contextUrl="index" title="Generar VEP de AFIP 2020" />
                <h1 className="text-center">VEP Volante Electrónico de Pago</h1>
                El <strong>VEP</strong> de AFIP, es el volante de pago electrónico que se utiliza para saldar obligaciones impositivas en todo el país.
                Para poder generar tu VEP, abajo vamos a dejar el paso a paso de como realizarlo.
                Requisitos para generarlo
                <ol className="my-2">
                    <li>
                        Tener HomeBanking y asegurarte de que tu entidad bancaria opera con VEP.
                        Podes corroborar desde el siguiente botón si tu banco admite el pago por VEP.
                        <div className="text-center my-3">
                        <a href="https://www.afip.gov.ar/comoPagarImpuestos/documentos/BancosQueOperanConVEP.pdf" target="_blank" rel="noopener noreferrer" className="btn bg-grad">Bancos Adheridos</a>
                        </div>
                    </li>
                    <li>
                        Tener habilitado el servicio de <strong>Presentación de DDJJ (Declación Jurada) y Pagos</strong>
                    </li>
                </ol>
                <h2>¿Cómo generar el VEP Volante Electrónico de Pago?</h2>
                Luego de haber corroborado que cumplimos con los requisitos, podés iniciar el proceso para generar tu VEP y pagarlo por linkpagoso o pagomiscuentas de la siguientee manera:
                <ol className="my-2">
                    <strong>Con Clave Fiscal</strong>
                    <li>
                        Ingresa con tu clave fiscal al servicio <strong>Presentación de DDJJ y Pagos</strong>
                    </li>
                    <li>
                        Ahora en el menú de la izquieda vas a buscar la opción de Nuevo Pago y vas a ingresar y llenar los campos requeridos.
                        <div className="row mx-0 justify content-center">
                            <img className="img-fluid my-2" src={require('../../assets/AFIP/VEP/paso 2 VEP.JPG')} alt="Paso 2 para generar mi VEP" title="paso 2 para generar mi VEP"/>
                        </div>
                    </li>
                    <li>
                        Una vez hecho lo anterior, presioná en el botón SIGUIENTE y el Volante ya estará generado. Solo resta elegir el medio por el cual vas a pagarlo y listo.
                    </li>
                </ol>
                <ol>
                    <strong>Por HomeBanking</strong>
                    <li>Ingresá en tu Home.</li>
                    <li>Busca la opción de "Nuevo Pago" o "Realizar Pago".</li>
                    <li>Busca por rubro la palabra <strong>VEP</strong>.</li>
                    <li>Pagar el VEP.</li>
                </ol>
                <div className="alert alert-info border-info" role="alert">
                    <strong>A tener en cuenta: </strong>El comprobante generado tiene un periodo de validez de 30 días, una vez transcurrido ese tiempo, deberás realizar el proceso nuevamente.
                </div>



            </>

        }/>
    )
}