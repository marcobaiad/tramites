import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function TurnoAfip() {
    return(
        <MainDiv page={
        <>
        <Helmet description="¿Cómo sacer turno en AFIP? En tramitero.com te ayudamos a hacerlo de la manera más rápida y sencilla. Entrá ahora y termina tu trámite" contextUrl="index, follow" title="Turno AFIP 2020" />
            <h1 className="text-center">Turno AFIP</h1>
            <div className="alert alert-info border-info" role="alert">
                <strong>¡Atención!</strong> debito a la situación sanitaria de público conocimiento, los turnos solo están disponibles en las localidades en las que la cuarentena ya sea un poco más flexible y no se encuentre obligada a cumplir con el aislamiento preventivo y social. 
            </div>
            <h2>¿Cómo sacar Turno en AFIP?</h2>
            Deberás ingresar a la página de <a href="https://serviciosweb.afip.gob.ar/Publico/Turnos/Turnos.aspx" target="_blank" rel="noopener noreferrer">ServiciosWeb</a> de AFIP, una vez estés ahí:
            <ol className="my-2">
                <li>
                    Aparecerá un formulario como el de la imagen, donde es necesario ingresar algún documento que nos identifique. En caso de realizar un trámite por otra persona, recordá marcar la opción de REPRESENTO OTRA PERSONA.
                    <div className="row justify-content-center mx-0">
                        <img src={require('../../assets/AFIP/Turnos/paso-1-turno-afip.webp')} alt="Paso 1 para solicitar un turno en AFIP" title="Paso 1 para solicitar un turno en AFIP" className="img-fluid"/>
                    </div>
                </li>
                <li>
                    Seleccioná el trámite que querés realizar y se te asignará un turno.
                </li>
            </ol>
            <h3>Modificar o Cancelar turno AFIP</h3>
            Para poder administrar tus turnos, deberás ingresar en la página de AFIP con tu <strong>clave fiscal</strong> y buscar eal servicio llamado Tueno Web. Desde este servicio podrás: modificar o cancelar turnos, consultar el historico de turnos, ver que turnos tenés pendientes. <br/>
            Otra forma de cancelar turno de AFIP sin clave fiscal, es por el mail, ingresando al link que se envío cuando te confirmaron el turno.
        </>
        }/>
    )
}