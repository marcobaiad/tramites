import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function AsignacionPorEmbazaro() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    return (
        <MainDiv page={
            <>
                <Helmet description="¿Cómo cobrar asignación por Maternidad Down? Encontrá todo lo referido con la asignación por Maternidad Down en tramitero.com" contextUrl="index, follow" title="Asignación por Maternidad Down ¿Cómo realizar el trámite?" />
                <h1 className="text-center">Asignación por Maternidad Down ¿Qué es?</h1>
                <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre la asignación por Maternidad Down de ANSES.</p> 
                <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>A quien le corresponde</li>
                            <li>Documentación necesaria</li>
                            <li>Requisitos</li>
                            <li>Como realizar el trámite</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                La <strong>asignación por Maternidad Down</strong> es una ayuda que reciben las las trabajadoras en relación de dependencia durante 180 días en en reemplazo de su sueldo, cuando su hijo nace con sindrome de Down.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice 
                        description1="¿A quien le corresponde?" 
                        description2="¿Cuales son los requisitos?"
                        description3="¿Qué documentación necesito?"
                        description4="¿Cómo realizar el trámite?" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                        nodo4={titulo4}
                    />
                </Suspense>
                <h2>¿A quien le corresponde cobrar Maternidad Down?</h2>
                Las personas a las que les corresponde esta asignación son las siguientes:
                <ul className="my-3">
                    <li>Trabajadoras en blanco</li>
                    <li>Trabajadoras del servicio domestido (registradas).</li>
                    <li>Trabajadoras que se encuentren cobrando por ART</li>
                </ul>
                <h2>Requisitos para Cobrar Asignación por Maternidad Down</h2>
                Recordá que es necesario solicitar la extensión de la <a href="/Anses/licencia-por-maternidad">Licencia por Maternidad</a> 15 días antes de la finalización de la misma, mediando cert. de diagnostico de Síndrome de Down de tu bebé.
                <h2>¿Que documentación necesito presentar?</h2>
                Para poder realizar el trámite es necesario que reunir toda la documentación solicitada que detallamos abajo:
                <div class="alert alert-info border-primary" role="alert">
                    <strong>¡Atención!</strong> Si tenés más de un trabajo registrado, deberás completar un formulario por cada uno.
                </div>
                <ul className="my-3">
                    <li>Formulario <a href="https://www.anses.gob.ar/formulario/ps-255-declaracion-jurada-novedades-unificadas-de-suaf2" target="_blank" rel="noopener noreferrer">PS 2.55 - Declaración Jurada Novedades Unificadas SUAF</a> rubros: 1, 3, 7 y 10. <br/>
                    Podes reemplazar el rubro 7 presentando el cert. médico donde tu empleador tomó conocimiento del diagnostico de tu bebé. <br/>
                    El rubro 10 debe tener tanto tu firma como la del empleador. En caso de no poder hacer firmar a tu empleador por el aislamiento social y preventivo, podes solicitar una nota con la firma del mismo por foto o pdf.
                    </li>
                    <li>En caso de ser trabajadora del servicio Domestico: <br/>
                    <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-10/PS%202.75%20DDJJ%20Maternidad%20Servicio%20Domestico.pdf" target="_blank" rel="noopener noreferrer">PS 2.75 - Declaración Jurada Maternidad Servicio Doméstico</a> rubros: 1, 2, 5 y 6. <br/>
                    El rubro 6 debe tener la firma de tu empleador, al igual que en el formulario anterior, podrás solicitar una nota a tu empleador donde confirme los datos solicitados en el rubro 5: horas trabajadas, monto de remuneración mensual y la fecha de inicio al trabajo.
                    </li>
                    <li>
                        Cert. Médico donde figuren los datos de tu bebé, DNI y diagnóstico con firma del médico.
                    </li>
                    <li>
                        Nota del empleador en caracter de DDJJ, donde informe la fecha en que fue notificado del diagnóstico de Sindrome de Down de tu bebé y la fecha en la que solicitaste la ampliación de tu licencia por Maternidad. 
                    </li>
                    <li>
                        Constancia de Alta de Personal de Casas Particulares desde la <a href="https://serviciosweb.afip.gob.ar/genericos/guiaDeTramites/VerGuia.aspx?tr=63" target="_blank" rel="noopener noreferrer">página de AFIP</a>.
                    </li>
                    <li>
                        Formulario <a href="https://serviciosweb.afip.gob.ar/genericos/formularios/pdf/interactivos/F102RT.pdf" target="_blank" rel="noopener noreferrer">F 102/RT Volante de Pago Trabajador de Casas Particulares y Contribuciones</a> o recibo de sueldo.
                    </li>
                </ul>
                <div class="alert alert-info border-primary" role="alert">
                    <strong>A tener en cuenta: </strong> En caso de necesitar cambiar el método o medio de pago, deberás completar el <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-07/PS%202.72%20reclamo.medio%20de%20pago%20y%20apoderado%20CUNA.pdf" target="_blank" rel="noopener noreferrer">Formulario 2.72 - Reclamo/ Medio de pago y Apoderado</a> en los rubros 1 y 3. En caso de elegír la opción de CBU, es necesario un comprobante emitido por cajero o banco para acreditar que la cuenta es tuya.
                </div>
                <h2>¿Cómo realizar el trámite?</h2>
                <div class="alert alert-info border-primary" role="alert">
                    <strong>¡Atención!</strong> por la situación de aislamiento social, el trámite debe realizarse por <a href="https://servicioscorp.anses.gob.ar/" target="_blank" rel="noopener noreferrer">Atención Virtual</a> con clave de seguridad social.
                </div>
                Una vez hayas ingresado con tu clave, los pasos son los siguientes:
                <ol className="my-3">
                    <li>Presiná en boton de Iniciar Atención que está a la derecha.</li>
                    <li>
                        Elegí el trámite que querés realizar
                        <div className="row mx-0 my-2 justify-content-center"><img className="img-fluid" loading="lazy" src={require('../../assets/Anses/Asignacion por Embarazo/Asignacion-por-Embarazo1.webp')} alt="Asignación por Prenatal"/></div>
                    </li>
                    <li>
                        Elegí cual es tu situación laboral actual
                        <div className="row mx-0 my-2 justify-content-center">Recorcá que cada vez que vayas a adjuntar un archivo, deberás seleccionar el tipo de archivo correcto.<img className="img-fluid" loading="lazy" src={require('../../assets/Anses/Asignacion por Embarazo/Asignacion-por-prenatal.webp')} alt="Asignación por Prenatal"/>
                        </div>    
                    </li>
                    <li>Luego, vas a tener que adjuntar la documentación requedida: Formulario <a href="https://www.anses.gob.ar/sites/default/files/formulario/2018-03/PS%202.67%20SOLICITUD%20ASIGNACION%20POR%20EMBARAZO.pdf" target="_blank" rel="noopener noreferrer">PS 2.67 - Solicitud por Embarazo</a> (rubro 1 y 2) y también el <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-07/PS%202.72%20reclamo.medio%20de%20pago%20y%20apoderado%20CUNA.pdf" target="_blank" rel="noopener noreferrer">PS 2.72 - Reclamo/ Medio de Pago y Apoderado</a> (rubro 3)</li>
                    <li>En caso de elegir CBU, deberás adjuntar también constancia del mismo emitida por tu banco o homebanking.</li>
                    <li>Marcar que aceptas terminos y condiciones y guardar.</li>
                </ol>
            </>
        }/>
    );
}
