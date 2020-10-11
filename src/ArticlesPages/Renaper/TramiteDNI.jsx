import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice')); 

export default function TramiteDNI() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <MainDiv page={
            <>
                <Helmet description="¿Como renovar DNI? En tramitero.com encontrarás los pasos para la renovación de tu DNI. Entrá ahora y termina tu trámite" contextUrl="index, follow" title="Trámite DNI" />
                <h1 className="text-center">Turno DNI</h1>
                <div className="card px-0 my-3">
                    <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa para sacar la Cedula Azul en 2020.</p> 
                    <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>Como sacar turno</li>
                            <li>Que hacer en caso de perder el DNI</li>
                            {/* <li>DNI Digital</li> */}
                        </ul>
                        Continúa leyendo para terminar obtener tu DNI manera fácil y sencila.
                    </div>
                </div>                
                El <strong>Documento Nacional de Indentidad</strong> es el documento único que nos identifica a los argentinos y a los extranjeros que residen en el país.
                <div className="alert alert-info my-3" role="alert">
                    <strong>¡Atención!</strong> Por el contexto de público conocimiento tanto los registros civiles provincuales como el RENAPER, se encuentran trabajando con precaución para seguir garantizando el poder acceder al DNI y preservar la salud de sus empleados.
                </div>
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice description1="¿Cómo sacar Turno?" 
                        description2="¿Que pasa si pierdo mi DNI?"
                        // description3="DNI Digital" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        // nodo3={titulo3}
                    />
                </Suspense>
                <h2 ref={titulo1}>¿Cómo sacar turno para renovar el DNI?</h2>
                Para realizar la renovación del DNI, es necesario sacar un turno en el <strong>RENAPER</strong>. Ingresá desde <a href="https://turnos.argentina.gob.ar/turnos/seleccionTurno/475" target="_blank" rel="noopener noreferrer">acá</a>. <br/> 
                Luego vas a elegir tu provincia y la localidad más cercana. 
                <div className="row justify-content-center my-3">
                    <img className="img-fluid" loading="lazy" src={require('../../assets/Renaper/DNI/paso 1.webp')} alt="imagen de ejemplo para sacar turno"/>
                </div> <br/>
                Cuando hayas rellenado los campos vas a presionar el botón de CONTINUAR y se desplegará otro menú que indicará si existen turnos disponibles en la sucursal que seleccionaste. <br/>
                <div className="row justify-content-center my-2">
                    <img className="img-fluid" loading="lazy" src={require('../../assets/Renaper/DNI/paso 2.webp')} alt="imagen de ejemplo para sacar turno" /> 
                </div> <br/>
                Deberás seleccionar una fecha y una hora, si todo salió bien, tendrás 5 minutos para completar tus datos personales para confirmar el turno. <br/>
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
                <h2 ref={titulo2}>Perdí mi DNI, ¿Qué hago?</h2>
                En caso de necesitar con urgencia tu <strong>documento de indentidad</strong>, podes descargar tu DNI en tu celular. <br/>
                Para descargar el <strong>DNI en tu celular</strong> deberás ponerte en contacto con el siguiente mail <a href="mailto:consultas@renaper.gob.ar">consultas@renaper.gob.ar</a> para solicitar la aprobación de la descarga de tu DNI. <br/>
                <strong>¿Qué datos necesito enviar?</strong>
                <ul className="my-2">
                    <li>N° de DNI</li>
                    <li>Nombre Completo</li>
                    <li>N° de Celular</li>
                    <li>Domicilio donde realizas la Cuarentena</li>
                    <li>Explicación detallada del motivo de la urgencia</li>
                </ul>
                <div className="alert alert-info my-3" role="alert">
                    <strong>A tener en cuenta: </strong> En caso de aprobarse tu solicitud, el DNI virtual tendrá una vigencia de hasta 30 días una vez finalizada la cuarentena.
                </div>
                {/* <h2 ref={titulo3}>DNI Digital ¿cómo se hace?</h2>
                Para poder tener nuestro DNI en en celular, debemos contar con lo siguiente:
                <ul>
                    <li>Un celular inteligente (smart phone)</li>
                    <li>Sistema operativo Android 5.0.21+ o IOS 11.0+</li>
                    <li>Emil</li>
                    <li></li>
                    <li></li>
                </ul> */}
            </>

        }/>
    )
}