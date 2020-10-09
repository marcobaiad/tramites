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
                        En Tramitero.com sabemos lo complicado que puede ser tener que realizar un trámite, ya sea de forma presencial o digital. Es por eso que nos propusimos ayudarte a terminarlos. Somos un sitio web enfocado en trámites de la República Argentina, con información precisa, detallada y concisa que te ayudará a realizar tus trámites de manera super eficiente y rápida. <br/>
                        Nuestro objetivo principal es que una vez terminada nuestra guía, cada persona sepa exactamente lo que debe hacer, según el trámite que querés realizar. <br/>
                        Nuestros expertos están en la busqueda permanente de cualquier cambio para mantener actualizados todos estos trámites y así poder brindar guías de alta calidad.
                    </p>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="1" id='Anses'
                            titleSeccion="Trámites Anses"
                            firstText="¿Necesitas hacer un trámite en ANSES o conoces a alguien que está por hacerlo? En esta sección encontrarás las guías referidas a los trámites de ANSES. ¿Querés sacar un turno en ANSES? Mirá como sacar un turno para SUAF, o un turno para AUH, también podrás enterarte de como sacar el bono de $10000, como acceder al crédito ProCreAr, como cobrar fondo de desempleo, entre otros trámites."
                            entradas={postAnses}
                        />
                    </Suspense>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="2" id='Afip'
                            titleSeccion="Trámites Afip"
                            firstText="En esta sección encontrará como realizar los trámites más requeridos de AFIP. ¿Necesitas hacer un Trámite en AFIP y no está seguro de como se hace? ¿Cómo emitir factura Electrónica? ¿Cómo hacer el Formulario Ceta? ¿Cómo sacar mi Clave Fiscal?. Con nuestras guías super efectivas, podrás saber con exactutid cuales son los requisitos en cada caso, que documentación necesitas reunir, todo esto con el objetivo de poder concluir de manera fácil su trámite en la web oficial de la entidad."
                            entradas={postAfip}
                        />
                    </Suspense>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="3" id='Automotor'
                            titleSeccion="Registro Automotor"
                            firstText="¿Qué necesito para la Venta de auto usado? ¿Cómo sacar el duplicado del titulo Automotor? ¿Como sacar la Cedula Azul? Aquí podrás encontrar estos trámites y muchos más, para finalizar cualquier gestión en el Registro Nacional del Automotor."
                            entradas={postAutomotor}
                        />
                    </Suspense>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="4" id='Renaper'
                            titleSeccion="Trámites Renaper"
                            firstText="¿Querés realizar el registro o identificación de tu recién nadido? ¿Querés renovar o sacar tu  DNI? ¿Cómo sacar el Pasaporte Argentino? Aquí encontrarás como realizar aquellos trámites relacionados con el Renaper (Registro Nacional de Personas).
                            Nuestras guías rápidas le ayudaran a terminar su trámite mucho más rápido."
                            entradas={postRenaper}
                        />
                    </Suspense>
                </>
            } />
    )
};

