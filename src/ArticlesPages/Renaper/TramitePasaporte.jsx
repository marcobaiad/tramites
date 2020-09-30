import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/indice')); 

export default function TramitePasaporte() {
    
    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return(
        <MainDiv page={
            <>
                <Helmet description="¿Cómo tramitar el pasaporte? En tramitero.com te ayudamos con nuertás guiías super rápidas y sencillas. Entrá ahora y termina tu trámite" contextUrl="index" title="Pasaporte: ¿Cómo tramitarlo?" />
                <h1 className="text-center">Tramitar Pasaporte</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa para sacar la Cedula Azul en 2020.</p> 
                    <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>Como sacar turno</li>
                            <li>Como se tramita</li>
                            <li>Costo</li>
                        </ul>
                        Continúa leyendo para terminar obtener tu DNI manera fácil y sencila.
                    </div>
                </div>
                El <strong>Pasaporte</strong> es el documento que acredita la identidad de una persona y la nacionalidad de la misma. El pasaporte es necesario para ingresar a algunos paises.
                <div className="alert alert-info my-3" role="alert">
                    <strong>¡Atención!</strong> Por infotexto de público conocimiento tanto los registros civiles provincuales como el RENAPER, se encuentran trabajando con precaución para seguir garantizando el poder acceder al DNI y preservar la salud de sus empleados.
                </div>
                <h2>¿Cómo sacar turno para Tramitar el pasaporte Argentino?</h2>
                Para inciar el trámite, es necesario sacar un turno. Ingresá desde <a href="https://turnos.argentina.gob.ar/turnos/seleccionTurno/475" target="_blank" rel="noopener noreferrer">acá</a>. <br/>
                 Luego vas a elegir tu provincia y la localidad más cercana. 
                <div className="row justify-content-center my-2">
                    <img className="img-fluid" loading="lazy" src={require('../../assets/Renaper/DNI/paso 1.JPG')} alt=""/>
                </div> <br/>
                Cuando hayas rellenado los campos vas a presionar el botón de CONTINUAR, verás que se desplegará otro menú <br/>
                <div className="row justify-content-center my-2">x
                    <img className="img-fluid" loading="lazy" src={require('../../assets/Renaper/DNI/paso 2.JPG')} alt=""/> <br/>
                </div>
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