import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function FacturaElectronica() {
    return (
        <MainDiv page={
        <>
            <Helmet description="¿Querés generar tu Clave Fiscal? En tramitero.com te ayudamos a hacerlo de la manera más rápida y sencilla. Entrá ahora y termina tu trámite" contextUrl="index" title="Clave Fiscal AFIP" />
            <h1>Factura Electrónica ¿Qué es?</h1>
            La <strong>factura electrónica </strong>es un comprobante digital que permite la no impresión de la factura en papel, promoviendo una mayor gestion e intercambio fluido de las mismas por medios digitales. Esta <strong>factura</strong> tiene la misma validez legal que una factura en formato papel y se puede utilizar en la mayoría de las operaciones vigentes.
            <h2>¿Cómo hacer la factura Electrónica de AFIP?</h2>
            Para hacer la factura electrónica, debemos tener en cuenta el tipo de destinatario y el monto de la operación. <br /> En caso de tratarse de un <strong>consumidor final</strong>: operación mayor de $7690 realizado por medios no autorizados o el monto de la factura superase o equipare los $15380 por alguno de los medios autorizados, los datos a incluir en la factura son:
            <ul className="my-2">
                <li>Nombre Completo</li>
                <li>Domicilio</li>
                <li>CUIT/CUIL/CDI</li>
            </ul>
            <div className="alert alert-info" role="alert">
                <strong>A tener en cuenta: </strong> Los medios autorizados emitir facrura electrónica son Tarjetas de Débito/ Crédito/ Prespagas no bancarias y transferencia de pago instrumentada.
            </div>
            La factura para responsable inscrito deberá identificar al cliente, siempre y cuando la operación fuese igual o menor a $7690 y la operación se efectuara en el marco de la comercialización mayorista por algún medio autorizado.
            <h2>¿Cómo hacer la factura Electrónica de AFIP?</h2>
            Los pasos para la emisión de la factura, son los siguientes:
            <ol>
                <li>
                    Habilitar punto de venta desde la página de AFIP con Clave Fiscal (más abajo detallamos como hacerlo).
                </li>
                <li>
                    Luego ingresar al menú de <strong>Comprobantes en Línea</strong> donde verás los contribuyentes asociados al CUIL ingresado.
                </li>
                <li>
                    Seleccioná la opción de <strong>Datos Adicionales del Comprobante</strong>
                </li>
                <li>
                    Completa todos los campos y presioná el botón GUARDAR
                </li>
                <li>
                    Ahora vas a acceder a <strong>Generar Comprobantes</strong> y seleccionar la opción que corresponda en punto de venta a utilizar y el tipo de comprobante a emitir.
                </li>
            </ol>
            Una vez finalizados los puntos mencionados, ya solo queda completar los datos del emisor/receptor y confirmar que los datos cargados sean correctos. <br />
            En caso de tener que hábilitar un punto de venta, en el menú Comprobantes en Línea de la web de AFIP ingresá a la opción <strong>ABM Puntos de Ventas</strong>, una vez adentro vas a ingresar a Administración de Puntos de Ventas y Domicilios. En esta nueva ventana seleccioná el nombre y apellido y volvé al memú ABM Puntos de ventas, presioná el botón AGREGAR para completar los datos solicitados, luego acepta esos cambios y presioná el botón CONFIRMAR.
            <h2>¿Cómo solicitar autorización para emitir factura Electrónica?</h2>
            Los requisitos para la solicitud de emisión de este tipo factura son los siguientes: <br />
            <ul>
                <li>
                    CUIT/ CUIL/ CDI
                </li>
                <li>
                    Clave Fiscal Nivel 3 (enterate como sacarla desde <a className="font-weight-bold" href="https://marcobaiad.github.io/tramites/#/Afip/clave-fiscal" target="_blank" rel="noopener noreferrer">acá</a>)
                </li>
                <li>
                    Contar con los servicios necesarios habilitados en tu clave fiscal. 
                </li>
            </ul>
             {false && 
             <div>

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
            <h3>¿Quienes están obligados a emitir por la AFIP este comprobante?</h3>
            Estan alcanzados todos las categorias del monotributo, Inscriptos en el Impuesto al Valor Agregado.
            Actividades comprendidas en el anexo de la RG 3749, exportadores por la RG 2758 y quienes comercializan bienes usados no registrables enmarcados en la RG 3411. 
            <strong>¿Quines estan exceptuados?</strong> Aquellas personas que están dentro del Régimen de inclusión Social y Promoción de Trabajo indepentiente.
        </>}
        />
    )
}