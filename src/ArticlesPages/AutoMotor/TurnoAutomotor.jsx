import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function TurnoAutomotor() {
    return(
        <MainDiv page={
            <>
                <Helmet description="Enterate de ¿cómo sacar un turno en el Registro Automotor? En la web de Tramitero.com te ayudamos a hacerlo." contextUrl="index" title="Turno Automotor" />
                <h1 className="text-center">¿Cómo sacar un turno en el Registro del Automotor?</h1>
                <ol className="my-3">
                    <li>
                        Ingresa a <a href="https://www2.jus.gov.ar/dnrpa-site/#!/identificarDominio" target="_blank" rel="noopener noreferrer">DNRPA</a> y vas a tener que seguir los pasos para sacar un turno online en la página oficial del <strong>Registro Automotor</strong>.
                    </li>
                    <li>
                        Una vez se haya ingresado, lo primero que debemos hacer es seleccionar el trámite que deseamos realizar. Una vez seleccionado vamos a presionar en CONTINUAR. <br/>
                        <div className="row justify-content-center mx-0 my-2">
                            <img loading="lazy" className="img-fluid" src={require('../../assets/Cedula Azul/paso 1 cedula azul.webp')} alt="Paso 1 para trámite de Cedula Azul DNRPA" title="Paso 1 para trámite de Cedula Azul DNRPA"/>
                        </div>
                    </li>
                    <li>
                        Luego deberás completar los siguientes campos con tu número de dominio (patente) y número de chasis.
                        <div className="row justify-content-center mx-0 my-2">
                            <img loading="lazy" src={require('../../assets/Cedula Azul/paso 2 cedula azul.webp')} alt="Paso 2 para sacar Cedula azul" title="Paso 2 para sacar Cedula azul" className="img-fluid"/>
                        </div>
                    </li>
                    <li>
                        Por último deberás indicar el número de CUIL/CUIT de la persona que está solicitando la cédula. 
                        <div className="row justify-content-center mx-0 my-2">
                            <img loading="lazy" src={require('../../assets/Cedula Azul/paso 3 cedula azul.webp')} alt="Paso 3 para tramitar la cedual azul por internet" title="Paso 3 para tramitar la cedual azul por internet" className="img-fluid"/>
                        </div>
                        En caso de no estár en la base de datos de La Dirección del Registro de la Propiedad del Automotor, deberás completar los datos detallados a continuación.
                    </li>
                    <ul>
                        <li>
                            Apellido y Nombre
                        </li>
                        <li>
                            Carácter del solicitante (si es el titular o apoderado, tutor, etc.)
                        </li>
                        <li>
                            Datos de contacto: Email, teléfono y operadora.
                        </li>
                    </ul>
                </ol>              
                <div className="alert alert-primary border-info my-3" role="alert">
                    <strong>¡Atención!</strong> A partir del 5to paso, cada trámite tiene su adicional antes de confirmar el turno. Por ejemplo en caso de querar <strong>tramitar la Cédula Azul</strong> <a href="http://" target="_blank" rel="noopener noreferrer" className="text-success">Ver ¿cómo trámitar la Cedula Azul?</a> deberás agregar los datos de la persona a la que queres otorgar el permiso. Otro ejemplo sería, en caso de querer hacer el <strong>duplicado del titulo del Automotor</strong> <a className="text-success" href="http://" target="_blank" rel="noopener noreferrer">¿cómo sacar el duplicado del Titulo Automotor?</a>, deberás solo indicar si sos persona Humana o Juridica para terminar con el turno.
                </div>


            </>
        }/>
    )
}