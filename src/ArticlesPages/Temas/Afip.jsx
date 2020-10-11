import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));
const Relacionados = React.lazy(() => import('../../components/Relacionados'));


export default function Afip() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <h1 className="text-center my-2">Trámites más frecuentes de ANSES</h1>
            <p>Esta sección contiene las guías específicas para todos los trámites más frecuentes de ANSES.</p>
            <section>
                <h2>Asignaciones</h2>
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
            <section>
                <h2>Créditos</h2>
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
            <section>
                <h2>Otros Beneficios</h2>
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
    );
}