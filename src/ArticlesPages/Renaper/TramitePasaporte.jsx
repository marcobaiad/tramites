import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function TramitePasaporte() {
    return(
        <MainDiv page={
            <>
                <Helmet description="¿Querés generar tu Clave Fiscal? En tramitero.com te ayudamos a hacerlo de la manera más rápida y sencilla. Entrá ahora y termina tu trámite" contextUrl="index" title="Clave Fiscal AFIP" />
                <h1 className="text-center">Tramitar Pasaporte</h1>
                El <strong>Pasaporte</strong> es el documento que acredita la identidad de una persona y la nacionalidad de la misma. El pasaporte es necesario para ingresar a algunos paises.
                <div className="alert alert-info my-3" role="alert">
                    <strong>¡Atención!</strong> Por infotexto de público conocimiento tanto los registros civiles provincuales como el RENAPER, se encuentran trabajando con precaución para seguir garantizando el poder acceder al DNI y preservar la salud de sus empleados.
                </div>
                <h2>¿Cómo sacar turno para Tramitar el pasaporte Argentino?</h2>
                Para inciar el trámite, es necesario sacar un turno. Ingresá desde <a href="https://turnos.argentina.gob.ar/turnos/seleccionTurno/475" target="_blank" rel="noopener noreferrer">acá</a>. <br/>
                 Luego vas a elegir tu provincia y la localidad más cercana. 
                <div className="row justify-content-center">
                    <img className="img-fluid" loading="lazy" src={require('../../assets/Renaper/DNI/paso 1.JPG')} alt=""/>
                </div> <br/>
                Cuando hayas rellenado los campos vas a presionar el botón de CONTINUAR, verás que se desplegará otro menú <br/>
                <img className="img-fluid" loading="lazy" src={require('../../assets/Renaper/DNI/paso 2.JPG')} alt=""/> <br/>
                El mismo indicará si existen turnos disponibles en la sucursal que seleccionaste. En caso de existir turnos disponibles, deberás seleccionar un día y una hora, si todo salió bien, tendrás 5 minutos para completar tus datos personales para confirmar el turno. <br/>
                Los datos requeridos son los siguientes:
                <ul className="my-2">
                    <li>Tipo de Documento</li>
                    <li>Documento Extanjero (En caso de tener un DNI de extranjeros)</li>
                    <li>Nombre/s</li>
                    <li>Apellido/s</li>
                    <li>Email</li>
                    <li>N° de Teléfono</li>
                </ul>
                Si tu localidad o provincia no figura en la página del RENAPER, para <strong>renovar tu dni</strong> deberás corroborar como realizar el trámite en el Registro Civil más cercano a tu domicilio.
                <div className="alert alert-info my-3" role="alert">
                    <strong>A tener en cuenta: </strong> En caso de aprobarse tu solicitud, el DNI virtual tendrá una vigencia de hasta 30 días una vez finalizada la cuarentena.
                </div>
            </>
        }/>
    )
}