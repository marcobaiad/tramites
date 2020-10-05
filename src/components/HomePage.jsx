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
                        ¿Se te complicó realizar un trámite en línea? En Tramitero.com te ayudamos a terminarlo. Somos un sitio web enfocado en trámites de la República Argentina, con información precisa, detallada y concisa para que puedas realizar tus trámites de manera super eficiente y rápida.
                        Nuestro sistema de formularios inteligentes le facilitará finalizar sus trámites de forma exitosa.
                    </p>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="1" id='Anses'
                            titleSeccion="Trámites Anses"
                            firstText="¿Planea hacer un Trámite en ANSES o conoce a alguien que está por hacerlo? Si necesita hacer un trámite relacionado con la ANSES, en esta sección encontrará los más importantes. Nuestros expertos están en la busqueda permanente de cualquier cambio para mantener actualizados todos estos trámites y poder brindar guías de alta calidad, también contamos con un sistema novedoso de formularios inteligentes que serán de mucha ayuda para poder concluir su trámite en la web oficial de dicha entidad."
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
                            firstText="En esta sección encontrará como realizar los trámites más importantes de AFIP. ¿Necesita hacer un Trámite en AFIP y no está seguro de como realizarlo? Nuestro sistema novedoso de formularios inteligentes le serviran como guía para poder concluir de manera fácil su trámite en la web oficial."
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
                            firstText="¿Estás buscando vender tu auto y no sabes que trámites debés realizar o querés sacar un turno para el registro automotor? Aquí podrás encontrar aquellos trámites a realizar en el RPA automotor
                    Recuerda utilizar nuestro sistema de formularios que te serviran como guía para que puedas concluir tu tramite de manera exitosa."
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
                            firstText="¿Querés realizar el registro o identificación de tu recién nadido? ¿Querés renovar o sacar tu  DNI? Aquí encontrarás como realizar aquellos trámites relacionados con el Renaper (Registro Nacional de Personas).
                    Le recordamos utilizar nuestro sistema de formularios que le ayudará a concluir dicho trámite de manera mucho más fácil y rápida."
                            entradas={postRenaper}
                        />
                    </Suspense>
                </>
            } />
    )
};

