import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Indice.css';

export default function Indice(props) {

    const history = useHistory();

    const { description1, description2, description3, description4, description5, description6, description7, description8, description9, description10, nodo1, nodo2, nodo3, nodo4, nodo5, nodo6, nodo7, nodo8, nodo9, nodo10 } = props

    return (
        <div className="indice my-3">
            <p className="mx-3 font-weight-bold text-center mt-3">Mapa del Sitio</p>
            <div className="d-flex flex-column flex-md-row flex-wrap mx-0 px-0 px-md-3 py-3 justify-content-center align-items-center text-center">
                {
                    description1 && 
                    <div className="btn btn-outline-info col-8 col-md-3 my-1 my-md-3" onClick={() => nodo1.current.scrollIntoView()}>
                        <i className="far fa-file-alt"></i>
                        <p className="mb-0">{description1}</p>
                    </div>
                }{
                    description2 && 
                    <>
                        {
                            description1 && description2 &&
                             <>   
                                <i className="d-none d-md-block my-1 fas fa-arrows-alt-h arrow-horizontal mx-2 align-self-center text-info"></i>
                                <i className="d-block d-md-none my-1 fas fa-arrows-alt-v arrow-vertical text-info"></i>
                            </>
                        }
                        <div className="btn btn-outline-info  col-8 col-md-3 my-1 my-md-3" onClick={() => nodo2.current.scrollIntoView()}>
                            <i className="fas fa-tasks"></i>
                            <p className="mb-0">{description2}</p>
                        </div>
                    </>
                }{
                    description3 && 
                    <>
                    {
                        description2 && description3 &&
                            <>   
                            <i className="d-none d-md-block my-1 fas fa-arrows-alt-h arrow-horizontal mx-2 align-self-center text-info"></i>
                            <i className="d-block d-md-none my-1 fas fa-arrows-alt-v arrow-vertical text-info"></i>
                        </>
                    }
                    <div className="btn btn-outline-info  col-8 col-md-3 my-1 my-md-3" onClick={() => nodo3.current.scrollIntoView()}>
                        <i className="fas fa-tags"></i>
                        <p className="mb-0">{description3}</p>
                    </div>
                    </>
                }{
                    description4 && 
                    <>
                    {
                        description3 && description4 &&
                            <>   
                            <i className="d-none d-md-block my-1 fas fa-arrows-alt-h arrow-horizontal mx-2 align-self-center text-info"></i>
                            <i className="d-block d-md-none my-1 fas fa-arrows-alt-v arrow-vertical text-info"></i>
                        </>
                    }
                    <div className="btn btn-outline-info  col-8 col-md-3 my-1 my-md-3" onClick={() => nodo4.current.scrollIntoView()}>
                        <i className="far fa-file-alt"></i>
                        <p className="mb-0">{description4}</p>
                    </div>
                    </>
                }{
                    description5 && 
                    <>
                    {
                        description4 && description5 && 
                         <>   
                            <i className="d-none d-md-block my-1 fas fa-arrows-alt-h arrow-horizontal mx-2 align-self-center text-info"></i>
                            <i className="d-block d-md-none my-1 fas fa-arrows-alt-v arrow-vertical text-info"></i>
                        </>
                    }
                    <div className="btn btn-outline-info  col-8 col-md-3 my-1 my-md-3" onClick={() => nodo5.current.scrollIntoView()}>
                    <i className="far fa-file-alt"></i>
                        <p className="mb-0">{description5}</p>
                    </div>
                    </>
                }{
                    description6 && 
                    <>
                    {
                        description6 && 
                         <>   
                            <i className="d-none d-md-block my-1 fas fa-arrows-alt-h arrow-horizontal mx-2 align-self-center text-info"></i>
                            <i className="d-block d-md-none my-1 fas fa-arrows-alt-v arrow-vertical text-info"></i>
                        </>
                    }
                    <div className="btn btn-outline-info  col-8 col-md-3 my-1 my-md-3" onClick={() => nodo6.current.scrollIntoView()}>
                    <i className="far fa-file-alt"></i>
                        <p className="mb-0">{description6}</p>
                    </div>
                    </>
                }{
                    description7 && 
                    <>
                    {
                        description7 && 
                         <>   
                            <i className="d-none d-md-block my-1 fas fa-arrows-alt-h arrow-horizontal mx-2 align-self-center text-info"></i>
                            <i className="d-block d-md-none my-1 fas fa-arrows-alt-v arrow-vertical text-info"></i>
                        </>
                    }
                    <div className="btn btn-outline-info  col-8 col-md-3 my-1 my-md-3" onClick={() => nodo6.current.scrollIntoView()}>
                    <i className="far fa-file-alt"></i>
                        <p className="mb-0">{description7}</p>
                    </div>
                    </>
                }

            </div>
        </div>
    )
}
