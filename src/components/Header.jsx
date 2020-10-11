import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import CollapseMenu from './CollapseMenu';
import posts from '../Utils/posts';
import Links from './Links';

// const Links = React.lazy(() => import('../Utils/Links'));

export default function Header() {

    let ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(BlackBerry)/i);
    
    const [mobilOn, setMobilOn] = useState(true);

    const buttonMenu = useRef(null)
    const [LinksAnses, setLinksAnses] = useState([]);
    const [LinksAfip, setLinksAfip] = useState([]);
    const [LinksAutomotor, setLinksAutomotor] = useState([]);
    const [LinksRenaper, setLinksRenaper] = useState([]);
    const [LinksNoticias, setLinksNoticias] = useState([]);
    const [allPost, setAllPost] = useState([]);
    const [postfilter, setPostfilter] = useState([]);
    const [valueFilter, setValueFilter] = useState();
    const showDiv = useRef();
    const showDrop = useRef();

    const mobile = () => {
        if (ismobile && window.outerWidth < 768) {
            setMobilOn(mobilOn)
        } else {
            setMobilOn(!mobilOn)
        }
    };


    const LinkPost = (props) => {
        const { pathPost, text } = props
        return <Links pathPost={pathPost} colorText="text-white" text={text} />
    }

    const DataLinks = () => {
        const FilterLinkAnses = posts.Anses.filter(entrue => entrue.showHome);        
        const LinksDataAnses = FilterLinkAnses.map((fild, l)=> <LinkPost key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksAnses(LinksDataAnses)
        const LinksDataAfip = posts.Afip.map((fild, l)=> <LinkPost key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksAfip(LinksDataAfip)
        const LinksDataRenaper = posts.Renaper.map((fild, l)=> <LinkPost key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksRenaper(LinksDataRenaper)
        const LinksDataAutomotor = posts.Automotor.map((fild, l)=> <LinkPost key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksAutomotor(LinksDataAutomotor)
        const LinksDataNoticias = posts.Noticias.map((fild, l)=> <LinkPost key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksNoticias(LinksDataNoticias)
        setAllPost(posts.Afip.concat(posts.Anses, posts.Automotor, posts.Renaper, posts.Noticias))
    }

    const HandlerChange = (e) => {
        const postFiltrados = [];
        let texto = e.target.value.toLowerCase();
        texto !== "" ? 
        showDrop.current.classList.add("show") 
        : 
        showDrop.current.classList.remove("show")
        for (let post of allPost) {
            let titulo = post.textLink.toLowerCase();
            if (titulo.indexOf(texto) !== -1) {
                postFiltrados.push(post);
                setValueFilter(postFiltrados.map(p => <Link className="dropdown-item" onClick={formReset} to={p.pathPost}>{p.titleCard}</Link>))
                setPostfilter(post.textLink)
            }
        }
    }

    const formReset = () => {
        showDrop.current.classList.remove("show")
        showDiv.current.reset();
        buttonMenu.current.click()
    }

    useEffect(() => {
        mobile()
        DataLinks(); 
    }, []);

    return (
        <div className="header-top bg-info">
            <nav className="navbar navbar-expand-lg navbar-dark px-0">
                <Link className="navbar-brand text-white font-weight-bold ml-3" to="/">Tramitero.com</Link>
                <button className="navbar-toggler mx-2" ref={buttonMenu} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    {!mobilOn ?
                        <ul className="navbar-nav w-100">
                            <li className="nav-item font-weight-bold">
                                <Link className="nav-link dropdown-toggle text-white" aria-controls="Anses" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Anses
                                </Link>
                                <div className="dropdown-content bg-info" aria-labelledby="Anses">
                                    {LinksAnses}
                                </div>
                            </li>
                            <li className="nav-item font-weight-bold">
                                <Link className="nav-link dropdown-toggle text-white" aria-controls="Afip" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Afip
                            </Link>
                                <div className="dropdown-content bg-info" aria-labelledby="Afip">
                                    {LinksAfip}
                                </div>
                            </li>
                            <li className="nav-item font-weight-bold">
                                <Link className="nav-link dropdown-toggle text-white" aria-controls="Renaper" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Renaper
                            </Link>
                                <div className="dropdown-content bg-info" aria-labelledby="Renaper">
                                    {LinksRenaper}
                                </div>
                            </li>
                            <li className="nav-item font-weight-bold">
                                <Link className="nav-link dropdown-toggle text-white" aria-controls="Automotor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Automotor
                                </Link>
                                <div className="dropdown-content bg-info" aria-labelledby="Automotor">
                                    {LinksAutomotor}
                                </div>
                            </li>
                            <li className="nav-item font-weight-bold">
                                <Link className="nav-link dropdown-toggle text-white" aria-controls="Automotor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Noticias
                                </Link>
                                <div className="dropdown-content bg-info" aria-labelledby="Automotor">
                                    {LinksNoticias}
                                </div>
                            </li>
                        </ul>
                        :
                        <CollapseMenu buttonMenu={buttonMenu} />
                    }
                    <form className={`form-inline my-2 my-lg-0 mr-0 mr-md-4 searchform`} ref={showDiv}>
                        <input className="form-control w-100" type="search" onChange={HandlerChange} placeholder="Buscar" aria-label="Buscar" />
                        <div className="dropdown w-100 show" id="showDiv">                            
                            <div className="dropdown-menu w-100"  ref={showDrop} aria-labelledby="dropdownMenu1">
                            { valueFilter }
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
};
