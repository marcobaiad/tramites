import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Indice.css';

export default function Indice(props) {

    const history = useHistory();

    const { title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, title17, title18, title19, title20, nodo1, nodo2, nodo3, nodo4, nodo5, nodo6, nodo7, nodo8, nodo9, nodo10, nodo11, nodo12, nodo13, nodo14, nodo15, nodo16, nodo17, nodo18, nodo19, nodo20 } = props

    return (
        <div className="indice">
            <p className="mx-3 mt-2 font-weight-bold ">Indice</p>
            <ol>
                { title1 &&
                    <li>
                        <button type="button" onClick={() => nodo1.current.scrollIntoView()} className="btn btn-link">{title1}</button>
                    </li> 
                }
                { title2 &&
                    <li>
                        <button type="button" onClick={() => nodo2.current.scrollIntoView()} className="btn btn-link">{title2}</button>
                    </li>
                }
                { title3 &&
                    <li>
                        <button type="button" onClick={() => nodo3.current.scrollIntoView()} className="btn btn-link">{title3}</button>
                    </li>
                }
                { title4 &&
                    <li>
                        <button type="button" onClick={() => nodo4.current.scrollIntoView()} className="btn btn-link">{title4}</button></li>
                }
                { title5 &&
                    <li>
                        <button type="button" onClick={() => nodo5.current.scrollIntoView()} className="btn btn-link">{title5}</button></li>
                }
                { title6 &&
                    <li>
                        <button type="button" onClick={() => nodo6.current.scrollIntoView()} className="btn btn-link">{title6}</button></li>
                }
                { title7 &&
                    <li>
                        <button type="button" onClick={() => nodo7.current.scrollIntoView()} className="btn btn-link">{title7}</button></li>
                }
                { title8 &&
                    <li>
                        <button type="button" onClick={() => nodo8.current.scrollIntoView()} className="btn btn-link">{title8}</button></li>
                }
                { title9 &&
                    <li>
                        <button type="button" onClick={() => nodo9.current.scrollIntoView()} className="btn btn-link">{title9}</button></li>
                }
                { title10 &&
                    <li>
                        <button type="button" onClick={() => nodo10.current.scrollIntoView()} className="btn btn-link">{title10}</button></li>
                }
                { title11 &&
                    <li>
                        <button type="button" onClick={() => nodo11.current.scrollIntoView()} className="btn btn-link">{title11}</button></li>
                }
                { title12 &&
                    <li>
                        <button type="button" onClick={() => nodo12.current.scrollIntoView()} className="btn btn-link">{title12}</button></li>
                }
                { title13 &&
                    <li>
                        <button type="button" onClick={() => nodo13.current.scrollIntoView()} className="btn btn-link">{title13}</button></li>
                }
                { title14 &&
                    <li>
                        <button type="button" onClick={() => nodo14.current.scrollIntoView()} className="btn btn-link">{title14}</button></li>
                }
                { title15 &&
                    <li>
                        <button type="button" onClick={() => nodo15.current.scrollIntoView()} className="btn btn-link">{title15}</button></li>
                }
                { title16 &&
                    <li>
                        <button type="button" onClick={() => nodo16.current.scrollIntoView()} className="btn btn-link">{title16}</button></li>
                }
                { title17 &&
                    <li>
                        <button type="button" onClick={() => nodo17.current.scrollIntoView()} className="btn btn-link">{title17}</button></li>
                }
                { title18 &&
                    <li>
                        <button type="button" onClick={() => nodo18.current.scrollIntoView()} className="btn btn-link">{title18}</button></li>
                }
                { title19 &&
                    <li>
                        <button type="button" onClick={() => nodo19.current.scrollIntoView()} className="btn btn-link">{title19}</button></li>
                }
                { title20 &&
                    <li>
                        <button type="button" onClick={() => nodo20.current.scrollIntoView()} className="btn btn-link">{title20}</button>
                    </li>
                }
            </ol>
        </div>
    )
}




// const arrayTitles = [props.title1, props.title2, props.title3, props.title4, props.title5, props.title6, props.title7, props.title8, props.title9, props.title10, props.title11, props.title12, props.title13, props.title14, props.title15, props.title16, props.title17, props.title18, props.title19, props.title20];

    // const arrayNodos = [props.nodo1, props.nodo2, props.nodo3, props.nodo4, props.nodo5, props.nodo6, props.nodo7, props.nodo8, props.nodo9, props.nodo10, props.nodo11, props.nodo12, props.nodo13, props.nodo14, props.nodo15, props.nodo16, props.nodo17, props.nodo18, props.nodo19, props.nodo20];

    // const Scrolls = () => {             
    //     const arrayT = arrayTitles.map(t => t);
    //     const arrayN = arrayNodos.map(n => n);
    //     if (arrayT) {
    //         document.getElementById(arrayN).scrollIntoView()            
    //     }
    // }