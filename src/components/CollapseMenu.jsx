import React, {useState, useEffect} from 'react';
import Links from './Links';
import posts from '../Utils/posts';

export default function CollapseMenu(props) {
    const { buttonMenu } = props

    const [LinksAnses, setLinksAnses] = useState([]);
    const [LinksAfip, setLinksAfip] = useState([]);
    const [LinksAutomotor, setLinksAutomotor] = useState([]);
    const [LinksRenaper, setLinksRenaper] = useState([]);
    const [LinksNoticias, setLinksNoticias] = useState([]);

    

    const LinkPost = (props) => {
        const { pathPost, text, func } = props
        return <Links func={func} pathPost={pathPost} text={text} />
        // return <Link onClick={() => buttonMenu.current.click()} className="dropdown-item" to={pathPost}>{text}</Link>
    }

    const DataLinks = () => {
        const LinksDataAnses = posts.Anses.map((fild, l) => <LinkPost func={() => buttonMenu.current.click()} key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksAnses(LinksDataAnses)
        const LinksDataAfip = posts.Afip.map((fild, l) => <LinkPost func={() => buttonMenu.current.click()} key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksAfip(LinksDataAfip)
        const LinksDataRenaper = posts.Renaper.map((fild, l) => <LinkPost func={() => buttonMenu.current.click()} key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksRenaper(LinksDataRenaper)
        const LinksDataAutomotor = posts.Automotor.map((fild, l) => <LinkPost func={() => buttonMenu.current.click()} key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksAutomotor(LinksDataAutomotor)
        const LinksDataNoticias = posts.Noticias.map((fild, l) => <LinkPost func={() => buttonMenu.current.click()} key={l} pathPost={fild.pathPost} text={fild.textLink} />)
        setLinksNoticias(LinksDataNoticias)
    }

    useEffect(() => {
        DataLinks()
    }, [])

    return (
        <div id="accordion" role="tablist" className="w-100 my-1">
            <div className="card p-0">
                <div className="card-header p-0 bg-grad font-weight-bold" role="tab" id="headingOne">
                    <button data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn bg-info text-white font-weight-bold w-100">
                        Anses
                    </button>
                </div>
                <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div className="card-body px-0">
                        {LinksAnses}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header p-0 bg-grad font-weight-bold" role="tab" id="headingTwo">
                    <button className="btn bg-info text-white font-weight-bold w-100" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Afip
                    </button>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="card-body">
                        {LinksAfip}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header p-0 bg-grad font-weight-bold" role="tab" id="headingTree">
                    
                        <button className="btn bg-info text-white font-weight-bold w-100" data-toggle="collapse" data-target="#collapseTree" aria-expanded="true" aria-controls="collapseTree">
                            Renaper
                        </button>
                    
                </div>
                <div id="collapseTree" className="collapse" role="tabpanel" aria-labelledby="headingTree">
                    <div className="card-body">
                        {LinksRenaper}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header p-0 bg-grad font-weight-bold" role="tab" id="headingFour">
                    
                        <button className="btn bg-info text-white font-weight-bold w-100" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Automotor
                        </button>
                    
                </div>
                <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="card-body">
                        {LinksAutomotor}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header p-0 bg-grad font-weight-bold" role="tab" id="headingFive">
                    <button className="btn bg-info text-white font-weight-bold w-100" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFour">
                        Noticias
                    </button>
                </div>
                <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
                    <div className="card-body">
                        {LinksNoticias}
                    </div>
                </div>
            </div>
        </div>
    )
}