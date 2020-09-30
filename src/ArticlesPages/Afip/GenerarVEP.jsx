import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/indice'));

export default function GenerarVEP() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    return(
        <MainDiv page={
            <>
            <Helmet description="¿Cómo generar el VEP de AFIP? En tramitero.com te ayudamos a hacerlo de la manera más rápida y sencilla. Entrá ahora y termina tu trámite" contextUrl="index" title="Generar VEP de AFIP 2020" />
                <h1 className="text-center">VEP Volante Electrónico de Pago ¿Qué es?</h1>
                <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como Generar el VEP en 2020.</p> 
                    <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>Que es</li>
                            <li>Que necesito</li>
                            <li>Como se hace</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                El <strong>VEP</strong> de AFIP, es el volante de pago electrónico que se utiliza para saldar obligaciones impositivas en todo el país. Legalmente, es la representación virtual de los formularios 799, 801 y 105.
                <Suspense fallback={<div>Cargando...</div>}>
                    <Indice 
                        description1="Requisitos para generar un VEP en 2020" 
                        description2="Generar VEP en HomeBanking 2020" 
                        description3="Generar VEP con Clave Fiscal en 2020"
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                    />
                </Suspense>
                <h2 ref={titulo1}>Requisitos para Generar un VEP</h2>
                <div className="row justify-content-arround my-3 mx-0">
                    <ol className="col-12 col-md-6">
                        <div className="">
                            <li>
                                Tener HomeBanking y asegurarte de que tu entidad bancaria opera con VEP.
                            </li>
                            <li>
                                Tener habilitado el servicio de <strong>Presentación de DDJJ (Declación Jurada) y Pagos</strong>
                            </li>
                        </div>
                    </ol>
                    <div className="text-center col-12 col-md-6 my-3 my-md-0">
                        Corroborá si tu banco admite el pago por VEP. <br/>
                        <a href="https://www.afip.gov.ar/comoPagarImpuestos/documentos/BancosQueOperanConVEP.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary font-weight-bold my-3">Bancos Adheridos</a>
                    </div>
                </div>
                <h2 ref={titulo2}>¿Cómo generar el VEP Volante Electrónico de Pago?</h2>
                Luego de haber corroborado que cumplimos con los requisitos, podés iniciar el proceso para generar tu VEP y pagarlo por <strong>linkpagos</strong> o <strong>pagomiscuentas</strong> de la siguiente manera:
                <h2>¿Cómo generar un VEP por <strong>HomeBanking</strong>?</h2>
                <ol className="my-3">
                    <li>Ingresá en tu Home.</li>
                    <li>Busca la opción de "Nuevo Pago" o "Realizar Pago".</li>
                    <li>Busca por rubro la palabra <strong>VEP</strong>.</li>
                    <li>Una vez que hayas seleccionado la opción de VEP deberás ingresar el monto a pagar y con eso ya habrás terminado.</li>
                </ol>
                <div className="alert alert-info border-info" role="alert">
                    <strong>A tener en cuenta: </strong>El comprobante generado tiene un periodo de validez de 30 días, una vez transcurrido ese tiempo, deberás realizar el proceso nuevamente.
                </div>
                    <h2 ref={titulo3}>¿Cómo generar un VEP <strong>Con Clave Fiscal</strong>?</h2>
                <ol className="my-3">
                    <li>
                        Ingresa con tu <a href="https://tramitero.com/Afip/clave-fiscal">clave fiscal</a> al servicio <strong>Presentación de DDJJ y Pagos</strong>
                    </li>
                    <li>
                        Ahora en el menú de la izquieda vas a buscar la opción de Nuevo Pago y vas a ingresar y llenar los campos requeridos.
                        <div className="row mx-0 justify content-center">
                            <img className="img-fluid my-2" src={require('../../assets/AFIP/VEP/paso 2 VEP.JPG')} alt="Paso 2 para generar mi VEP" title="paso 2 para generar mi VEP"/>
                        </div>
                    </li>
                    <li>
                        Una vez hecho lo anterior, presioná en el botón SIGUIENTE y el Volante ya estará generado.
                    </li>
                    <li>
                        Elegí el medio de pago para realizar el pago y listo.
                    </li>
                </ol>

            </>

        }/>
    )
}