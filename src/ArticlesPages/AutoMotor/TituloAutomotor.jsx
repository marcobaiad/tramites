import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function TituloAutomotor() {
    return(
        <MainDiv page={
            <>
                <Helmet description="" contextUrl="index" title="Titulo Duplicado Automotor" />
                <h1 className="text-center">Titulo por Duplicado del Automotor</h1>
                El <strong>titulo del Automotor</strong> es el documento con el cual podrás certificar que un vehículo ya sea auto, moto o maquinaria, forma parte de tu propiedad.
                Si perdiste o te robaron el titulo de tu auto o se te deterioró el mismo deberás solicitar un duplicado.
                <h2>¿Que necesito para solicitar un duplicado del titulo?</h2>
                La documentación ncecesaria para sacar el duplicado del titulo del automotor, son los siguientes: 
                <ul className="my-3">
                    <li>Documento identificatorio:</li>
                    <ul>
                        <li>DNI en caso de ser argentino. DNI de paises limítrofes o pasaporte en caso de ser extranjero.</li>
                        <div className="alert alert-primary mt-3" role="alert">
                            <strong>Importante</strong>: La constancia de documento entrámite <strong>NO</strong> acredita identidad.
                        </div>
                        <li>Si sos apoderado o en su defecto representante lega, deberás presentar documentos que lo comprueben.</li>
                    </ul>
                    <li>
                        En caso de Hurto o extravío, deberás presenar la solicitud Tipo 12.
                    </li>
                    <li>
                        Si el titulo está deteriorado y no es legible, deberás presentarlo de igual manera para avanzar con el trámite.
                    </li>
                </ul>
                <h2>¿Cómo hacer el Duplicado de Titulo Automotor?</h2>
                El trámite se realiza de manera presencial (en caso de extravío o hurto del documento) o semipresencial (por deterioro).
                <strong>Método Presencial</strong><br/>
                <ol className="my-3">
                    <li className="">
                        En caso de ser perdida o hurto del titulo deberás realizar la verificación física del vehículo en una planta habilitada.
                    </li>
                    <li>
                        Presentar Formulario 02. Deberás adicionar el Formulario 59 en caso de que el trámite lo realice un tercero.
                    </li>
                    <li>
                        Retirar el titulo.
                    </li>
                </ol>

            </>

        }/>
    )
}