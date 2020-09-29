import React from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

export default function AsignacionFH() {
    return (
        <MainDiv page = {
            <>
            <Helmet description="¿Como saber si me corresponde cobrar SUAF? ¿Cuando Cobro SUAF? Encontrá toda esta información En tramitero.com" contextUrl="index" title="SUAF 2020" />
            <h1 className="mb-5 text-center">Asignación Familiar por Hijo ¿Qué es?</h1>
            También conocida como <strong>SUAF</strong>, es un beneficio mensual que ANSES brinda a los trabajadores en relación de dependencia, monotributistas, jubilados y pensionados con hijos menores a 18 años o discapacitados.
            <h2 className="my-3">¿Quienes cobran Asignación Familiar por Hijo ANSES?</h2>
            Pueden acceder al beneficio, aquellas personas en las siguientes situaciones:
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
            <h3 className="py-2">Asignación Familiar por Hijo Requisitos</h3>
            <ul>
                <li>Tener tus datos actualizados en la base de ANSES.</li>
                <li>Los ingresos del Grupo Familiar, deben estar entre los topes
                mínimos y máximos establecidos por la ANSES para cada periodo.
                </li>
                <li>Tener la documentación necesaria al momento de la presentación (DNI del grupo familiar original y copia, cert. de nacimiento, cert. de matrimonio o convivencia)</li>
                <li>En caso de hijo con discapacidad presentar la acreditación de discapacidad.</li>
            </ul>
            <h2>¿Cómo inicio al trámite para cobrar SUAF?</h2>
            Antes de iniciar el trámite, recordá que es necesario sacar turno desde la página de ANSES.
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
                <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                    Podes descargar el formulario de Solicitud de Asignaciones familiares desde el siguiente botón
                    <button className="btn bg-grad">Formulario PS 2.73</button>
                </div>

            </div>
        </>    
    }            
    />
    )
}