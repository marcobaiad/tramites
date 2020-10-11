import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';
import SeccionHome from '../../components/SeccionHome';
import posts from '../../Utils/posts';
import CardArticle from '../../components/CardArticle';

const Indice = React.lazy(() => import('../../components/Indice'));
const Relacionados = React.lazy(() => import('../../components/Relacionados'));


export default function Anses(props) {

    const [postAsignaciones, setPostAsignaciones] = React.useState();
    const [postCreditos, setPostCreditos] = React.useState();
    const [postOtrosBeneficios, setPostOtrosBeneficios] = React.useState();

    const filterAnses = () => {
        const allPosts = posts.Anses.map(p => p);
        const filtradoAsignacion = allPosts.filter(cat => cat.category === 'asignacion') 
        const filtradoCreditos = allPosts.filter(cat => cat.category === 'credito') 
        const filtradoOtros = allPosts.filter(cat => cat.category === 'otros') 
        const CardAsignaciones = filtradoAsignacion.map(c => <CardArticle CardArticlesData={c} />);
        const CardACreditos = filtradoCreditos.map(c => <CardArticle CardArticlesData={c} />);
        const CardAOtros = filtradoOtros.map(c => <CardArticle CardArticlesData={c} />);       
        setPostAsignaciones(CardAsignaciones);
        setPostCreditos(CardACreditos);
        setPostOtrosBeneficios(CardAOtros);
    }

    React.useEffect(() => {
        filterAnses();
        window.scrollTo(0, 0);
    }, [])

    return (
        <MainDiv page={
            <>
                <h1 className="text-center my-2">Trámites más frecuentes de ANSES</h1>
                <p>Esta sección encontrarás todas las guías para todos los trámites más frecuentes de ANSES.</p>
                <section>
                    <h2>Asignaciones</h2>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="4" id='Renaper'
                            entradas={postAsignaciones}
                        />
                    </Suspense>
                </section>
                <section>
                    <h2>Créditos</h2>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="4" id='Renaper'
                            entradas={postCreditos}
                        />
                    </Suspense>
                </section>
                <section>
                    <h2>Otros Beneficios</h2>
                    <Suspense fallback={
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    }>
                        <SeccionHome numero="4" id='Renaper'
                            entradas={postOtrosBeneficios}
                        />
                    </Suspense>
                </section>
            </>
        } />
    );
}