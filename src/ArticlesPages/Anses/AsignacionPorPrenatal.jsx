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
                <Helmet description="¿Como cobrar asignación por Prenatal? Encontrá todo lo referido con la asignación por Prenatal en tramitero.com" contextUrl="index" title="Asignación Prenatal 2020 ¿A quien le corresponde?"/>
                <h1 className="text-center">Anses Asignación Prenatal ¿Qué es?</h1>
                <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre la asignación por prenatal en 2020.</p> 
                <div className="card-body">
                    <strong>¿Qué información vas a encontrar?</strong>
                        <ul>
                            <li>A quien le corresponde</li>
                            <li>Requisitos</li>
                            <li>Como realizar el trámite</li>
                        </ul>
                        Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                    </div>
                </div>
                La <strong>asignación por prenatal</strong> es una ayuda mensual que reciben las mujeres que se encuentren en periodo gestacional hasta la concepción o interrupción del embarazo.
                <Suspense fallback={
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                }>
                    <Indice 
                        description1="¿A quien le corresponde?" 
                        description2="¿Cuales son los requisitos?"
                        description3="¿Qué documentación necesito?" 
                        description4="¿Cómo realiar el trámite?" 
                        nodo1={titulo1}
                        nodo2={titulo2}
                        nodo3={titulo3}
                        nodo4={titulo4}
                    />
                </Suspense>
                <h2 ref={titulo1}>¿A quien le corresponde cobrar asignación por Prenatal?</h2>
                Le corresponde este beneficio a:
                <ul className="my-3">
                    <li>Trabajadoras registradas y trabajadoras de temporada</li>
                    <li>Monotributistas de cat. A a la H</li>
                    <li>Trabajadoras cobrando por ART</li>
                    <li>Trabajadoras cobrando <a href="/Anses/seguro-de-desempleo">prestación por desempleo</a>.</li>
                    <li>Peronas que cobren la Pensión Honorífica de Vetenraos de Guerra del Atlántico Sur.</li>
                </ul>
                <h2 ref={titulo2}>Requisitos para Cobrar Prenatal</h2>
                <div class="alert alert-info border-primary my-1" role="alert">
                    <strong>Importante: </strong> Es importante que presentes la solicitud para cobrar esta ayuda antes de las 30 semanas de embarazo. En caso de hacerlo después del tiempo mencionado, solo se hará el pago de los meses desde que iniciaste tu solicitud hasta el momento de nacimiento o interrupción del embarazo.
                </div>
                Todos las personas englobadas en esta lista, requieren de un mínimo de 3 meses de Antigüedad laboral antes de la gestación para cobrar este beneficio. <br/>
                En caso de no cumplir con la antigüedad, esta prestación se abonará a partir de cumplida la misma.
                <ul>
                    <li>Igual que en la <a href="/asignacion-por-embarazo">Asignación por Embarazo</a> debés tener más de 12 semanas de gestación.</li>
                    <li>Trabajadores en relación de dependencia o trabajadoras que se encuentran cobrando por ART: La antigüedad se computa por haber estado registrado como monotributista o ser titular de la prestación por desempleo.</li>
                    <li>Trabajadores Monotributistas: 3 meses de aportes consecutivos anteriores a la fecha de concepción. A fin de cobrar esta prestación en su totalidad, la antigüedad se computará si ha cobrado prestación por desempleo o trabajado de forma registrada.
                    </li>
                    <li>Trabajadores que cobren <a href="/Anses/seguro-de-desempleo">Prestación por Desempleo</a> o Pensión Honorífica de Guerra del Atlántico Sur: no requieren antiguedad.</li>
                    <li>Los Ingresos del grupo familiar o individual, no deben superar los topes máximos vigentes.</li>
                </ul>
                <h2 ref={titulo3}>¿Que documentación necesito presentar?</h2>
                Para poder realizar el trámite es necesario que juntes toda la documentación solicitada que detallamos abajo:
                <ul className="my-3">
                    <li>Formulario <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-08/PS%202.55%20DECLARACION%20JURADA%20NOVEDADES%20UNIFICADAS%20DE%20SUAF.pdf" target="_blank" rel="noopener noreferrer">PS 2.55 declaración Jurada de SUAF Novedades Unificadas</a> Completando los rubros <strong>1, 2, 3, 5, 6, 10.</strong>. <br/>
                    <div class="alert alert-info border-primary my-1" role="alert">
                        <strong>A tener en cuenta: </strong> Podes reemplazar el rubro 6 con un cert. de Embarazo. EL mismo debe tener: <br/>
                        <ul className="my-2">
                            <li>Datos completos de la embarazada (DNI y nombre completo).</li>
                            <li>Datos completos del embarazo (semanas o meses de gestación).</li>
                            <li>Datos completos del Médico.(Nombre completo y sello del médico).</li>
                        </ul>
                        En caso de haber llenado el <strong>rubro 2</strong>: El otro progenitor también deberá completar este formulario. <br/>
                        Si estás cobrando por ART: deberás solicitar la firma de tu empleador/ART en el <strong>rubro 10</strong>. <br/>
                        Si sos monotributista o titular de la restación por desempleo o PHVGAS <strong>No debés llenar el rubro 3</strong>. <br/>
                        Si sos trabajadora registrada también podes realizar la solicitud del prenatal al momento de solicitar la <a href="/Anses/asignacion-por-maternidad" target="_blank" rel="noopener noreferrer">Asignación por Maternidad</a>
                    </div>                  
                    </li>
                    <li>
                        Si el trámite lo realiza la pareja de la mujer embarazada, la realación deberá ser acreditada en ANSES, presentando acta de matrimonio, Unión Civil, Cert de convivencia, etc.
                    </li>
                    <li>
                        Si el embarazo llegase a ser interrumpido, se produjera un nacimiento prematuro con o sin vida antes de la fecha probable, se debe presentar cert médico.
                    </li>
                </ul>
                <h2 ref={titulo4}>¿Cómo realizar el trámite?</h2>
                <div class="alert alert-info border-primary" role="alert">
                    <strong>¡Atención! </strong> por la situación de aislamiento social, el trámite debe realizarse por <a href="" target="_blank" rel="noopener noreferrer">Atención Virtual</a> con clave de seguridad social.
                </div>
                Una vez hayas ingresado con tu clave, los pasos son los siguientes:
                <ol className="my-3">
                    <li>Presiná en boton de Iniciar Atención que está a la derecha.</li>
                    <li>Elegí el trámite que querés realizar
                        <div className="row mx-0 my-2 justify-content-center"><img className="img-fluid" loading="lazy" src={require('../../assets/Anses/Asignacion por Embarazo/Asigancion-por-Embarazo.webp')} alt="Asignación por Prenatal"/></div>
                    </li>
                    <li>Elegí cual es tu situación laboral actual
                    <div className="row mx-0 my-2 justify-content-center"><img className="img-fluid" loading="lazy" src={require('../../assets/Anses/Asignacion por Embarazo/Asignacion-por-Embarazo1.webp')} alt="Asignación por Prenatal"/></div>
                    </li>
                    <li> Adjuntar DNI (frente y dorso), <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-08/PS%202.55%20DECLARACION%20JURADA%20NOVEDADES%20UNIFICADAS%20DE%20SUAF.pdf" target="_blank" rel="noopener noreferrer">Formulario PS 2.55</a> y <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-07/PS%202.72%20reclamo.medio%20de%20pago%20y%20apoderado%20CUNA.pdf" target="_blank" rel="noopener noreferrer">Formulario PS 2.72</a> <br/>
                        <div className="row mx-0 my-2 justify-content-center">Recorcá que cada vez que vayas a adjuntar un archivo, deberás seleccionar el tipo de archivo correcto.<img className="img-fluid" loading="lazy" src={require('../../assets/Anses/Asignacion por Embarazo/Asignacion-por-prenatal.webp')} alt="Asignación por Prenatal"/>
                        </div>
                    </li>
                    <li>Dejá un breve comentario sobre el motivo de tu consulta.</li>
                    <li>Marcar que aceptas terminos y condiciones y presionar el botón de guardar.</li>
                </ol>
            </>
        }/>
    );
}
