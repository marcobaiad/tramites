import React from 'react';
import { Link } from 'react-router-dom';

function Relacionados(props) {
    // const {  } = props;
    return (
        <>
            <article className="card mx-2 my-2 border-info">
                <Link className="text-decoration-none text-dark" to="/Anses/seguro-de-desempleo" >
                    <div class="card-body">
                        <h4 class="card-title">Fondo de Desempleo</h4>
                        <p class="card-text">¿Cómo acceder al Fondo de Desempleo? ¿Cuanto cobró de Fondo de Desempleo? Entrá y enterate como acceder a esta prestación.</p>
                    </div>
                </Link>
            </article>
            <article className="card mx-2 my-2 border-info">
                <Link className="text-decoration-none text-dark" to="/Anses/tarjeta-alimentaria" >
                    <div class="card-body">
                        <h4 class="card-title">Tarjeta Alimentaria</h4>
                        <p class="card-text">¿A quien le corresponde? ¿Cómo saber el saldo de mi Tarjeta Alimentar? Esto y mucho más podrás encontrar acá en Ttramitero.com.</p>
                    </div>
                </Link>
            </article>
            <article className="card mx-2 my-2 border-info">
                <Link className="text-decoration-none text-dark" to="/Anses/prestamos-AHU-y-SUAF" >
                    <div class="card-body">
                        <h4 class="card-title">Préstamo Anses para Asignaciones</h4>
                        <p class="card-text">¿Cuáles son los requisitos? ¿Como acceder al Crédito ANSES AHU Y SUAF?.</p>
                    </div>
                </Link>
            </article>
            <article className="card mx-2 my-2 border-info">
                <Link className="text-decoration-none text-dark" to="/Anses/prestamos-Jubilados-y-Pensionados" >
                    <div class="card-body">
                        <h4 class="card-title">Préstamo para Jubilados y Pensionados </h4>
                        <p class="card-text">¿Qué documentación necesito? ¿Cómo realizar el trámite? Con nuestra guía super sencilla, te ayudamos a sacar el crédito ANSES.</p>
                    </div>
                </Link>
            </article>
        </>
    );
}

export default Relacionados;