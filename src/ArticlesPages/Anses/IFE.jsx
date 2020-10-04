import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

function IFE() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    return (
        <MainDiv page={
        <>
            <Helmet description="¿Como saber si me corresponde cobrar el IFE? Entrá ahora y enterate de todas las novedades del IFE." contextUrl="index" title="IFE: Ingreso Familiar de Emergencia" />
            <h1 className="text-center">IFE: Ingreso Familiar de Emergencia Anses</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como cobrar el IFE en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>A quien le corresponde</li>
                        <li>Calendario de Pago 3er IFE</li>
                        <li>Como cobrar AHU</li>
                    </ul>
                    Continúa leyendo para terminar tu trámite de manera fácil y sencila.
                </div>
            </div>
            El <strong>IFE </strong>es un bono mensual de $10000 anunciado por el Gobierto Argentino de Alberto Fernandez como medida preventiva al contexto historico acontecido este 2020.<b />
            Con esta ayuda de ANSES, el gobierto busca alcanzar a no menos de 8 millones de Argentinos, para ayudarlos en el marco de la pandemia.
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                <Indice 
                    description1="¿A quién le corresponde cobrar el IFE?" 
                    description2="¿Cómo cobrar el Ingreso Familiar de Emergencia?"
                    description3="¿Cuándo cobro el 3er IFE 2020?"
                    description3="Calendario de pagos Cuarto IFE 2020"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                    nodo4={titulo4}
               />
            </Suspense>
            <h2 ref={titulo1}>¿A quien le corresponde le IFE?</h2>
            El DNU (Decreto Nacional de Urgencia) contemplaba para ser beneficiarios del <strong>Ingreso Familiar de emergencia</strong> a las siguientes personas:
            <ul className="my-3">
                <li>Trabajadores no registrados</li>
                <li>Trabajadores de casas particulares</li>
                <li>Personas inscriptas en el Monotributo Social</li>
                <li>Monotributistas clase A y <strong>B</strong></li>
            </ul> <br/>
            Podés corroborar por más información en la <a href="" className="font-weight-bold" target="_blank" rel="noopener noreferrer">página del IFE</a>
            <h2 ref={titulo2}>¿Como cobrar el IFE?</h2>
            El cobro del ife es mediante CBU. En caso de que no dispongas de una, el gobierno dispuso la posibilidad de abrir una <strong>Cuenta DNI</strong> de forma totalmente gratuita en los bancos Provincia de Buenos Aires o Nación.
            <h2 ref={titulo3}>Calendario de Pagos IFE ¿Cuándo cobro el tercer IFE?</h2>
            <div className="alert alert-info" role="alert">
                <strong>A tener en cuenta: </strong> En caso de cobrar <strong>AUH (Asignación Universal por Hijo)</strong> o <strong>AUE (Asignación Universal por Embarazo) </strong> el cobro del ingreo familiar de emergentia se deposita junto con la asignación. Esto quiere decir que el tercer IFE ya fue depositado entre el día 10 y 24 de Agosto en tu cuenta.
            </div>
            <strong>Tercer pago del Bono IFE </strong> a partir del día 25 de Agosto comienza el pago para las personas que hayan elegido cobrar por CBU. El mismo depende de la fecha de terminación del DNI. Corroborá aquí abajo el calendario de pagos.
            <div className="row mx-0 justify-content-center">
                <table className="table table-sm border my-3 col-12 col-md-6">
                    <thead className="table-info">
                        <tr className="text-center">
                            <th>Terminación DNI</th>
                            <th>Fecha de Cobro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td>0</td>
                            <td>25 y 26/8</td>
                        </tr>
                        <tr className="text-center">
                            <td>1</td>
                            <td>27 y 28/8</td>
                        </tr>
                        <tr className="text-center">
                            <td>2</td>
                            <td>31/8 y 1/9</td>
                        </tr>
                        <tr className="text-center">
                            <td>3</td>
                            <td>02 y 03/9</td>
                        </tr>
                        <tr className="text-center">
                            <td>4</td>
                            <td>04 y 07/9</td>
                        </tr>
                        <tr className="text-center">
                            <td>5</td>
                            <td>10 y 11/9</td>
                        </tr>
                        <tr className="text-center">
                            <td>6</td>
                            <td>10 y 15/9</td>
                        </tr>
                        <tr className="text-center">
                            <td>7</td>
                            <td>14 y 15/9</td>
                        </tr>
                        <tr className="text-center">
                            <td>8</td>
                            <td>16 y 17/9</td>
                        </tr>
                        <tr className="text-center">
                            <td>9</td>
                            <td>18 y 21/9</td>
                        </tr>
                    </tbody>
                </table>
            </div> <br/>
            Para más información podes consultar la <strong>página del IFE</strong> y los <strong>teléfonos del IFE</strong> desde <a href="https://www.anses.gob.ar/ingreso-familiar-de-emergencia" target="_blank" rel="noopener noreferrer">acá</a>
        </>
        }
        />
    );
}

export default IFE;