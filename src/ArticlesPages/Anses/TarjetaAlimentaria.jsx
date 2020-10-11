import React, {Suspense} from 'react';
import MainDiv from '../../components/MainDiv';
import Helmet from '../../components/Helmet';

const Indice = React.lazy(() => import('../../components/Indice'));

export default function TarjetaAlimentaria() {

    const titulo1 = React.useRef(null);
    const titulo2 = React.useRef(null);
    const titulo3 = React.useRef(null);
    const titulo4 = React.useRef(null);
    const titulo5 = React.useRef(null);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return(
        <MainDiv page={
        <>
            <Helmet description="Tarjeta Alimentaria ANSES, ¿Cómo solicitar la tarjeta Alimentaria de ANSES? Entrá en tramitero.com y te mostramos como." contextUrl="index, follow" title="ANSES Tarjeta Alimentaria 2020" />
           <h1 className="my-3 pt-3 text-center">Tarjeta Alimentaria</h1>
           <div className="card px-0 my-3">
                <p className="card-header text-white font-weight-bold bg-info">Esta es una guía completa sobre como acceder a la Tarjeta Alimentaria en 2020.</p> 
                <div className="card-body">
                <strong>¿Qué información vas a encontrar?</strong>
                    <ul>
                        <li>Como se tramita</li>
                        <li>A quien le corresponde</li>
                        <li>Monto de la Tarjeta Alimentaria</li>
                        <li>Que hacer si la pierdo</li>
                    </ul>
                    Continúa leyendo para enterarte de todo.
                </div>
            </div>
            La <strong>tarjeta alimentaria de ANSES</strong> fue pensada como un complemento alimentario de la mano del Plan <strong>Argentina contra el Hambre</strong>. Esta tarjeta te permite comprar todos los alimentos que componen la canasta básica (se excluyen bebidas alcohólicas), se puede utilizar en cualquier establecimiento que reciban tarjetas de crédito. La recarga se realiza el tercer viernes de cada mes, de forma automática.
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>}>
                <Indice 
                    description1="¿Cómo se tramita?" 
                    description2="¿A quien le corresponde?"
                    description3="Monto y Crédito de la tarjeta"
                    description4="¿Que hacer si pierdo mi tarjeta?"
                    description5="¿Cómo consultar el saldo?"
                    nodo1={titulo1}
                    nodo2={titulo2}
                    nodo3={titulo3}
                    nodo4={titulo4}
                    nodo5={titulo5}
               />
            </Suspense>
            <div className="alert alert-info" role="alert">
                <strong>A tener en cuenta:</strong> Con esta tarjeta no podrás retirar dinero desde ningún cajero. Está prohíbido vender el crédito, también está prohído comprar productos que no formen la canasta básica. En caso de incurrir en estás acciones, la tarjeta puede ser bloqueada por el ministerios de desarrollo social.
            </div>    
            <h2 ref={titulo1}>¿Como tramitar la tarjeta Alimentaria?</h2>
            La entrega de la <strong>tarjeta Alimentar</strong> está programada por etapas en distintas partes del país y no se necesita realizar ninguna gestión para obtenerla. Esto quiere decir que la tarjeta será entregada a todas aqellas personas que cumplan con los requisitos.
            <h2 ref={titulo2}>¿A quien le corresponde la tarjeta Alimentaria?</h2>
            Ésta tarjeta alcanza a las siguientes personas: 
            <ul className="my-3">
                <li>Beneficiarios de la AUH (Asignación Universal por Hijo) que tengan hijos/as menores de 7 años.</li>
                <li>Embarazadas que reciben <strong>Asignación por Embarazo</strong></li>
                <li>Personas con discapacidad (sin limite de edad).
                </li>
            </ul>
            <div className="alert alert-info" role="alert">
                <strong>Recomendación:</strong> Como el otorgamiento de la tarjeta es meramente virtual (la notificación es vía SMS o email), es de suma importancia tener actualizado tus datos en en <a href="https://servicioscorp.anses.gob.ar/clavelogon/logon.aspx?system=mianses" target="_blank" rel="noopener noreferrer">MI ANSES</a>.
            </div>
            <h2 ref={titulo3}>Monto de la Tarjeta Alimentar</h2>
            El monto a percibir dependerá de la cantidad de hijos menores de 7 años. <br/>Serán <strong>$4000</strong> para familias con un solo hijo y mujeres que cobren la asignación por embarazo.
             En caso de una familia con más de un hijo o hijos discapacitados el monto se extenderá hasta los <strong>$6000</strong>.
            <h3>¿El crédito de la tarjeta es acumulable?</h3>
            Si no gasto todo el dinero de la tarjeta en el mes, lo que quede se irá acumulando siempre y cuando hayas tenído al menos un consumo en el periodo. 
            Por ejemplo, si comprás algo de $1000 y a fin de mes todavía te queda el resto en la tarjeta, el mismo se sumará a la acreditación del mes siguiente.
            <h3 ref={titulo4}>¿Qué hacer en caso de Robo o extravío de la tarjeta Alimentaria?</h3> Si perdes tu tarjeta, o te robaron la misma, el titular debe gestionar una nueva con el banco emisor. Previo a realizar el trámite, deberás solicitar un turno en la entidad bancaria.
            <ul className="my-3">
                <li><a href="https://www.bna.com.ar/Personas/Turnos" data="_blank" rel="noopener noreferrer" title="click para abrir página web de turnos Banco Nación">Banco Nación </a><a href="tel:0810666444">0810-666-444</a></li>
                <li><a href="https://www.bancoprovincia.com.ar/turneroweb/#/" data="_blank" rel="noopener noreferrer" title="click para abrir página web de turnos Banco Provincia">Banco Provincia </a><a href="tel:0114379333"> (011)-4379333</a></li>
                <li><a href="https://www.nbch.com.ar/Personas/Banca-Electronica/Turnos-web" data="_blank" rel="noopener noreferrer" title="click para abrir página web de turnos Nuevo Banco del Chaco">Nuevo Bando del Chaco </a><a href="tel:08009996224"> 0800-999-6224</a> o <a href="tel:08002226224"> 0800-222-6224</a></li>
            </ul>            
            <h2 ref={titulo5}>¿Cómo consultar el saldo de mi Tarjeta Alimentaria?</h2>
            Si necesitas consultar el saldo de tu tarjeta, podes hacerlo por los siguientes métodos:
            <ul className="my-3">
                <strong>Anses: </strong> <br/>
                <li>Podrás comunicarte directamente con los operadores de Anses llamando al <a href="tel:+5408106664803">0810-666-4803</a></li>
                <strong>Desde el Banco emisor de la tarjeta: </strong>
                <li>Desde el HomeBanking</li>
                <strong>Web Visa: </strong>
                <li>Ingresando a la <a href="https://visahome.prismamediosdepago.com/socios/service/socialCard?windowId=a0c" target="_blank" rel="noopener noreferrer">web oficial VISA</a>, con los 16 digitos de tu tarjeta podrás corroborar tu saldo y el día de acreditación de saldo.</li>
            </ul>
            
        </>}
        />
    )
}