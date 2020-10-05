import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function AsignacionFH() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);

    return (
        <MainDiv page = {
            <>
            <Helmet description="¿Como saber si me corresponde cobrar SUAF? ¿Cuando Cobro SUAF? Encontrá toda esta información En tramitero.com. Entrá ahora y enterate de todo" contextUrl="index, follow" title="Anses Cobro Asignaciones Familiares SUAF ¿Cómo cobrar SUAF en 2020?" />
            <h1 className="mb-5 text-center">Asignación Familiar por Hijo ¿Qué es?</h1>
            <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre el salario SUAF en 2020.</p> 
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
            También conocida como <strong>SUAF</strong>, es un beneficio mensual que ANSES brinda a los trabajadores en relación de dependencia, monotributistas, jubilados y pensionados con hijos menores a 18 años o discapacitados.
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                <Indice 
                    description1="¿A quien le corresponde la asignación familiar SUAF?" 
                    description2="¿Cuales son los requisitos para acceder al SUAF 2020?"
                    description3="Trámite para cobrar Asignación Familiar por Hijo 2020" 
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
               />
            </Suspense>
            <h2 className="my-3" ref={titulo1}>¿Quienes cobran Asignación Familiar por Hijo ANSES?</h2>
            Para saber si cobras asignacion familiar por hijo o saber si te corresponde cobrar esta ayuda, podrás chequear en el siguiente listado si te encontrás en alguno de las siguientes situaciones:
            <ul className="mt-3">
                <li>Trabajadores en relación de Dependencia</li>
                <li>Trabajadores monotributistas</li>
                <li>Trabajadores de temporada con Reserva de Puesto de Trabajo.</li>
                <li>Trabajadores que se encuentren cobrando por una Aseguradora de Riesgos del Trabajo.</li>
                <li>Trabajadores que cobren la Prestación por Desempleo.</li>
                <li>Veteranos de Guerra del Atlántico Sur.</li>
                <li>Jubilados y pensionados.</li>
            </ul>
            <div className="alert alert-info" role="alert">
                <strong>Dato importante:</strong> El trámite para acceder a esta prestación es diferente para trabajadores en relación de dependencia y Jubilados-Pensionados.
            </div>
            <h3 className="py-2" ref={titulo2}>Asignación Familiar por Hijo Requisitos</h3>
            <ul className="my-3">
                <li>Tener tus datos actualizados en la base de ANSES.</li>
                <li>Los ingresos del Grupo Familiar, deben estar entre los topes
                mínimos y máximos establecidos por la ANSES para cada periodo.
                </li>
                <li>Tener la documentación necesaria al momento de la presentación (DNI del grupo familiar original y copia, cert. de nacimiento, cert. de matrimonio o convivencia)</li>
                <li>En caso de hijo con discapacidad presentar la acreditación de discapacidad.</li>
            </ul>
            <h2 ref={titulo3}>¿Cómo inicio al trámite para cobrar SUAF?</h2>
            Antes de iniciar el trámite, recordá que es necesario <a href="https://tramitero.com/Anses/sacar-turno">sacar turno</a> desde la página de ANSES.
            <div className="alert alert-info" role="alert">
                <strong>A tener en cuenta:</strong> Antes de iniciar el trámite, revisá si tus datos personales y vinculos familiares son correctos en MI ANSES.
            </div>
            <h3 className="py-2 text-center">Pasos para la presentación de documentación</h3>
            <div className="row mx-0">
                <ol className="col-12 col-md-6">
                    <li>Imprimir el Formulario <a href="">PS 2.73 - Solicitud de Asignaciones Familiares</a> o pedilo en
                    alguna oficina de ANSES.</li>
                    <li>Completa el formulario con tus datos y los de tus hijos. <strong>(Tener en cuenta que la firmas se
                    completan en la oficina de ANSES).</strong></li>
                    <li>Presentar el formulario en la fecha asignada</li>
                </ol>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center border rounded">
                    Descargá el formulario de Solicitud de Asignaciones familiares desde el siguiente botón
                    <a href="https://www.anses.gob.ar/sites/default/files/formulario/2019-10/PS%20273%20Solicitud%20AAFF%20Decreto%20614.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary my-3">Formulario PS 2.73</a>
                </div>

            </div>
            <h2>Monto asignacion Familiar por Hijo 2020</h2>
            Podés consultar el monto de las asignaciones desde el siguiente botón <br/>
            <div className="text-center">
                <a href="https://www.anses.gob.ar/sites/default/files/cartilla/2020-09/Montos%20AAFF%20Septiembre%202020.pdf" className="btn btn-primary my-3" target="_blank" rel="noopener noreferrer">Monto Asignaciones</a>
            </div>
        </>    
    }            
    />
    )
}