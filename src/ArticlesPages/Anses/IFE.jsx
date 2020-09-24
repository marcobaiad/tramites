import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

function IFE() {
    return (
        <MainDiv page={
        <>
            <Helmet description="¿Como saber si me corresponde corar el IFE? Entrá ahora y enterate de todas las novedades del IFE." contextUrl="index" title="IFE" />
            <h1 className="text-center">IFE: Ingreso Familiar de Emergencia Anses</h1>
            El <strong>IFE </strong>es un bono mensual de $10000 anunciado por el Gobierto Argentino de Alberto Fernandez como medida preventiva al contexto historico acontecido este 2020.<b />
            Con esta ayuda de ANSES, el gobierto busca alcanzar a no menos de 8 millones de Argentinos, para ayudarlos en el marco de la pandemia.
            <h2>¿A quien le corresponde le IFE?</h2>
            El DNU (Decreto Nacional de Urgencia) contemplaba para ser beneficiarios del <strong>Ingreso Familiar de emergencia</strong> a las siguientes personas.
            <ul>
                <li>Trabajadores no registrados</li>
                <li>Trabajadores de casas particulares</li>
                <li>Personas inscriptas en el Monotributo Social</li>
                <li>Monotributistas clase A y <strong>B</strong></li>
            </ul>
            <h2>¿Como cobrar el IFE?</h2>
            El cobro del ife es mediante CBU. En caso de que no dispongas de una, el gobierno dispuso la posibilidad de abrir una <strong>Cuenta DNI</strong> de forma totalmente gratuita en los bancos Provincia de Buenos Aires o Nación.
            <h2>Calendario de Pagos IFE ¿Cuándo cobro el tercer IFE?</h2>
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
            </div>
        </>
        }
        />
    );
}

export default IFE;