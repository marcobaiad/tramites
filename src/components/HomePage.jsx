import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeccionHome from './SeccionHome';
import CardArticle from './CardArticle';

export default function HomePage() {

    return (
        <>
            <div className="container px-0">
                <h1>Realizá tus Trámites en Línea</h1>
                <p>
                    ¿Se te complicó realizar un trámite en línea? En Tramitero.com te ayudamos a terminarlo. Somos un sitio web enfocado en trámites de la República Argentina, con información precisa, detallada y consisa para que puedas realizar tus trámites de manera super eficiente y rápida.
                    Nuestro sistema de formularios inteligentes le facilitará finalizar sus trámites de forma exitosa.
                </p>
                <section id='Anses'>
                    <h2>Trámites Anses</h2>
                    <p>¿Planea hacer un Trámite en ANSES o conoce a alguien que está por hacerlo? Si necesita hacer un trámite relacionado con la ANSES, en esta sección encontrará los más importantes. Nuestros expertos están en la busqueda permanente de cualquier cambio para mantener actualizados todos estos trámites y poder brindar guías de alta calidad, también contamos con un sistema novedoso de formularios inteligentes que serán de mucha ayuda para poder concluir su trámite en la web oficial de dicha entidad.</p>
                    <div className="row mx-0 flex-wrap justify-content-around">
                        <CardArticle titleCard="Prestamos para Jubilados y Pensionados" textCard="Casi" pathlinking="/Anses/prestamos/Jubilados-Pensionados" />
                        <CardArticle titleCard="Prestamos para AUH/SUAF" textCard="Casi" pathlinking="/Anses/prestamos/AUH-SUAF" />
                        <CardArticle titleCard="Como acceder al IFE" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Tarjeta Alimentaria" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Seguro de desempleo" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Solicitar CODEM" textCard="Casi" pathlinking="" />
                    </div>
                </section>
                {/* <section id='Nosis'>
                    <h2>Informes Crediticios</h2>
                    <p>Holiwis</p>
                    <div className="row mx-0 flex-wrap justify-content-around">
                        <CardArticle titleCard="Trámite DNI" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Trámite Pasaporte" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Certificado de Nacimiento" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Certificado de Casamiento" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Certificado de Defunción" textCard="Casi" pathlinking="" />
                    </div>
                </section> */}
                <section id='Afip'>
                    <h2>Trámites Afip</h2>
                    <p>En esta sección encontrará como realizar los trámites más importantes de AFIP. ¿Necesita hacer un Trámite en AFIP y no está seguro de como realizarlo? Nuestro sistema novedoso de formularios inteligentes le serviran como guía para poder concluir de manera fácil su trámite en la web oficial.</p>
                    <div className="row mx-0 flex-wrap justify-content-around">
                        <CardArticle titleCard="Clave Fiscal" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Formulario CETA (Cert. de Transferencia de Automotores)" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Factura Electrónica" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Inscripción Monotributo" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Turnos Afip" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Vep" textCard="Casi" pathlinking="" />
                    </div>
                </section>
                <section id='Automotor'>
                    <h2>Registro Automotor</h2>
                    <p>¿Estás buscando vender tu auto y no sabes que trámites debés realizar o querés sacar un turno para el registro automotor? Aquí podrás encontrar aquellos trámites a realizar en el RPA automotor</p>
                    <p>Recuerda utilizar nuestro sistema de formularios que te serviran como guía para que puedas concluir tu tramite de manera exitosa.</p>
                    <div className="row mx-0 flex-wrap justify-content-around">
                        <CardArticle titleCard="Turno Registro Automotor" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Transferencia Automotor" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Patentamiento Automotor" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Titulo Automotor" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Trámite cedula Azul" textCard="Casi" pathlinking="" />
                    </div>
                </section>
                <section id='Renaper'>
                    <h2>Tramites Renaper</h2>
                    <p>¿Querés realizar el registro o identificación de tu recién nadido? ¿Querés renovar o sacar tu  DNI? Aquí encontrarás como realizar aquellos trámites relacionados con el Renaper (Registro Nacional de Personas).</p>
                    <p>Le recordamos utilizar nuestro sistema de formularios que le ayudará a concluir dicho trámite de manera mucho más fácil y rápida.</p>
                    <div className="row mx-0 flex-wrap justify-content-around">
                        <CardArticle titleCard="Trámite DNI" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Trámite Pasaporte" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Certificado de Nacimiento" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Certificado de Casamiento" textCard="Casi" pathlinking="" />
                        <CardArticle titleCard="Certificado de Defunción" textCard="Casi" pathlinking="" />
                    </div>
                </section>
            </div>
        </>
    )
};

