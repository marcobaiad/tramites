import React, { useState, Suspense, useEffect } from 'react';
import posts from '../Utils/posts';
import Helmet from 'react-helmet';
import MainDiv from './MainDiv';

const CardArticle = React.lazy(() => import('./CardArticle'));
const SeccionHome = React.lazy(() => import('./SeccionHome'));


export default function HomePage() {

    const [postAnses, setPostAnses] = useState([]);
    const [postAfip, setPostAfip] = useState([]);
    const [postAutomotor, setPostAutomotor] = useState([]);
    const [postRenaper, setPostRenaper] = useState([]);

    const DataPost = () => {
        const postDataAnses = posts.Anses.map(a => <CardArticle CardArticlesData={a} />)
        setPostAnses(postDataAnses)
        const postDataAfip = posts.Afip.map(a => <CardArticle CardArticlesData={a} />)
        setPostAfip(postDataAfip)
        const postDataRenaper = posts.Renaper.map(a => <CardArticle CardArticlesData={a} />)
        setPostRenaper(postDataRenaper)
        const postDataAutomotor = posts.Automotor.map(a => <CardArticle CardArticlesData={a} />)
        setPostAutomotor(postDataAutomotor)
    }

    useEffect(() => {
        DataPost();
    }, [])

    return (
        <MainDiv page={
            <>
                <Helmet>
                    <title>Tramiteo.com Tramites en Línea</title>
                    <meta name="description" content="La web que con las mejores guías para realizar los trámites de Argentina. AFIP, ANSES, RENAPER, REGSTRO AUTOMOTOR, etc..." />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <h1 className="text-center">Realizá tus Trámites en Línea</h1>
                <p>
                    En Tramitero.com sabemos lo complicado que puede ser tener que realizar un trámite, ya sea de forma presencial o digital. Es por eso que nos propusimos ayudarte a terminarlos. Somos un sitio web enfocado en trámites de la República Argentina, con información precisa, detallada y concisa que te ayudará a realizar tus trámites de manera super eficiente y rápida. <br />
                        Nuestro objetivo principal es que una vez terminada nuestra guía, cada persona sepa exactamente lo que debe hacer, según el trámite que querés realizar. <br />
                        Nuestros expertos están en la busqueda permanente de cualquier cambio para mantener actualizados todos estos trámites y así poder brindar guías de alta calidad.
                    </p>
                <section>
                    <h2>Trámites ANSES</h2> <br />
                    <p>¿Necesitas hacer un trámite en ANSES o conoces a alguien que está por hacerlo? En esta sección encontrarás las guías referidas a los trámites de ANSES. ¿Querés sacar un turno en ANSES? Mirá como sacar un <strong>turno para SUAF</strong>, o un <strong>turno para AUH</strong>, también podrás enterarte de como cobrar el <strong>bono de $10000</strong>, como acceder al <strong>crédito ProCreAr</strong>, como cobrar <strong>fondo de desempleo</strong>, entre otros trámites.</p>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="1" id='Anses'
                            entradas={postAnses}
                        />
                    </Suspense>
                </section>
                <section>
                    <h2>Trámites AFIP</h2>
                    <p>En esta sección encontrará como realizar los trámites más requeridos de AFIP. ¿Necesitas hacer un Trámite en AFIP y no está seguro de como se hace? ¿Cómo emitir <strong>factura Electrónica</strong>? ¿Cómo hacer el <strong>Formulario Ceta</strong> ? ¿Cómo sacar mi <strong>Clave Fiscal nivel 3</strong>?. Con nuestras guías super efectivas, podrás saber con exactutid cuales son los requisitos en cada caso, que documentación necesitas reunir, y más. Todo esto con el objetivo de agilizar el trámite que quieras realizar desde la web oficial de la entidad.</p>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="2" id='Afip'
                            entradas={postAfip}
                        />
                    </Suspense>
                </section>
                <section>
                    <h2>Registro Automotor</h2>
                    <p>¿Qué necesito para la Venta de auto usado? ¿Cómo sacar el <strong>duplicado del titulo Automotor</strong>? ¿Como sacar la <strong>Cédula Azul</strong>? Aquí podrás encontrar estos trámites y muchos más. Con nuestras guías podrás finalizar cualquier gestión en el Registro Nacional del Automotor.</p>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="3" id='Automotor'
                            entradas={postAutomotor}
                        />
                    </Suspense>
                </section>
                <section>
                    <h2>Trámites RENAPER</h2>
                    <p>¿Querés realizar el registro o identificación de tu recién nadido? ¿Querés <strong>renovar o sacar tu  DNI</strong>? ¿Cómo sacar el <strong>Pasaporte Argentino</strong>? Aquí encontrarás como realizar aquellos trámites relacionados con el RENAPER (Registro Nacional de Personas).
                    Nuestras guías rápidas te ayudaran a terminar tu trámite mucho más rápido.</p>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="4" id='Renaper'
                            entradas={postRenaper}
                        />
                    </Suspense>
                </section>
            </>
        } />
    )
};

