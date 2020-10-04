import React, { Suspense } from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function InscripcionMonotributo() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    return (
        <MainDiv page={
        <>
            <Helmet description="¿Que es el monotributo? ¿Cómo ser monotributista? Enterate como en tramitero.com. Te ayudamos con nuestras guías rápidas, entrá ahora!" contextUrl="index" title="Monotributo y Categorias 2020" />
            <h1 className="text-center">Monotributo</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre el Monotributo en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>Beneficios de ser Monotributista</li>
                        <li>Como inscribirse</li>
                        <li>Caterogorias del monotributo</li>
                        <li>Requisitos y Documentación</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            El <strong>Monotributo Social</strong> es una herramienta que da el gobierno Argentino como regimen optativo de tributo, que busca facilitar y por sobre todo promover la incorporación de de las personas a la economía formal. El monto de aporte depende de la categoría a la que te inscribas (las categorias van desde la A hasta la K).
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                <Indice 
                    description1="¿Cuáles son los Beneficios?" 
                    description2="¿Cuáles son las categorias?"
                    description3="¿Qué documentación se requiere?" 
                    description4="¿Cómo ser monotributista?"
                    description5="¿Cómo realizar el pago mensual del Monotributo?"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                    nodo4={titulo4}
                    nodo5={titulo5}
               />
            </Suspense>
            <h2 ref={titulo1}>¿Cúales son los beneficios del monotributo?</h2>
            <ul>
                <li>Tendrás cobertura de Obra Social incluido el grupo familiar</li>
                <li>Podrás emitir facturas (tipo C)</li>
                <li>Realizar aportes para tu jubilación</li>
            </ul>
            Ahora que ya conoces los beneficios, capaz que te interese sacar el monotributo. Es por eso que abajo vamos a detallar cuales son los requisitos para ser <strong>monotributista deberas sacar turno en ANSES. Recorda reunir toda la documentación necesaria antes de comenzar el trámite:</strong>
            <ul className="my-3">
                <li>Ingreso bruto anual menor a $208738,25</li>
                <li>Ser dueno de un maximo de 2 bienes inmuebles (uno debe estar afectado al empredimiento).</li>
                <li>Ser dueño de un máximo de 3 biene muebles.</li>
                <li>No ser profesional universitario en ejercicio de su profesión.</li>
                <li>Contar con ingresos solamente de la actividad declarada al darte de alta.</li>
                <li>No ser Empleador.</li>
            </ul>
            <h2 ref={titulo2}>¿Cuáles son las categorias del monotributo?</h2>
            Te mostramos una lista completa con todas las caterogias para saber cuanto puede facturar un monotributista según su categoria: 
            <div className="row mx-0">
                <table className="table table-hover border col-12 col-md-6">
                    <thead className="table-info">
                        <tr className="text-center">
                            <th>Clase Monotributo</th>
                            <th>Ingreso Bruto Anual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <th scope="row">A</th>
                            <td>$208739,25</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">B</th>
                            <td>$313108,87</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">C</th>
                            <td>$417478,51</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">D</th>
                            <td>$626217,78</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">E</th>
                            <td>$834957,00</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">F</th>
                            <td>$1043696,27</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">G</th>
                            <td>$1252435,53</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">H</th>
                            <td>$1739493,79</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">I</th>
                            <td>$2043905,21</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">J</th>
                            <td>$2348316,42</td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row">K</th>
                            <td>$2609240,69</td>
                        </tr>
                    </tbody>
                </table>
                <div className="col align-self-center text-center col-12 col-md-6 my-3 my-md-3">
                    <div className="alert alert-info my-4" role="alert">
                        <strong>Atención: </strong>Los montos detallados, tienen vigencia desde el 01/01/2020 hasta la actualidad.
                    </div>
                    <p>Descarga el cuadro de categorias del monotributo y montos vigentes desde el siguiente botón</p>
                    <a className="btn btn-primary font-weight-bold" href="https://www.afip.gob.ar/monotributo/documentos/Categorias202001.pdf" target="_blank" rel="noopener noreferrer">Cuadro de categorías</a>
                </div>
            </div>
            <h2 ref={titulo3}>¿Qué documentación necesito para sacar el monotributo?</h2>
            En caso de realizar una única actividad económica solo deberás presentar <strong>DNI y copia del DNI</strong>. En caso de formar parte de una coperativa de trabajo deberás presentar:
            <ul className="my-2">
                <li>DNI y copia.</li>
                <li>Constancia de Inscripción de la Cooperativa de Trabajo o en su defecto la recepción de la solicitud por dicha constancia.</li>
            </ul>
            <div className="alert alert-info my-4" role="alert">
                Recorda que podes usar nuestro sistema de formularios inteligentes para corroborar todos los pasos necesarios para este trámite que te facilitará saber si cumplis con todos los requisitos y terminar lo antes posible.
            </div>
            <h2 ref={titulo4}>¿Cómo tramitar el monotributo?</h2>
            Para ser monotributista deberas sacar turno en ANSES para presentar toda la documentación necesaria. Recorda reunir toda la documentación antes de comenzar el trámite. Al momento de iniciar el proceso de inscripción deberás elegir una obra social. Asegurate de conocer todas las que hay disponibles desde <a href="https://www.sssalud.gob.ar/?page=listRnosc&tipo=7" title="listado de obras sociales monotributo" target="_blank" rel="noopener noreferrer">acá</a>.
            <br/> 
            Una vez te hayas inscripto, deberás pagar tu cuota mensual entre el 1 y día 20. Tené en cuenta que, en caso de no realizar tus aportes a tiempo, se generan intereses. 
            <h3 ref={titulo5}>¿Cómo realizar el pago de los aportes de los monotributistas?</h3>
            El pago se realiza con tu credencial de pago en bancos y lugares habilitados, a través de cajeros automáticos (de la red Banelco o Link), también podrás pagar con transferencia electrónica o adherir tu cuenta al débito automático.
            <br/> Para finalizar deberás presentar en ANSES tu DDJJ (declaracón Jurada) de Salud e inscribirte al impuesto a los ingresos brutos.
            <h2>¿Qué tipos de Monotributos hay?</h2>
            Dependiendo de la actividad laboral que vayas a llevar a cabo, es el tipo de monotributo al que vas acceder: <br/>
            Lista completa de los <strong>tipos de monotributo</strong> en Argentina 2020
            <ol className="my-3">
                <li>Trabajador independiente</li>
                <li>Miembro de una coperativa</li>
                <li>Trabajador independiente promovido</li>
                <li>Monotributo Social</li>
                <li>Regimen Simplificado Especial</li>
                <li>Monotributo Simplificado</li>
            </ol> 
        </>
        }/>
    )
}