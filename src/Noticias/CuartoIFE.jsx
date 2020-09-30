import React from 'react';
import MainDiv from '../components/MainDiv';
import Helmet from '../components/Helmet';
import Relacionados from '../components/Relacionados';

function CuartoIFE() {
    return (
        <MainDiv page={
            <>
                <Helmet description="4to IFE: ¿Peligra el cobro de la nueva ronda del IFE? Entrá ahora y enterate de todas las novedades del IFE." contextUrl="index" title="4to IFE ¿Se pagará el 4to IFE?" />            
                <h1 className="text-center">¿Que pasará con el Cuarto IFE?</h1>
                El día 21 del mes corriente (para ser exactos) culminó el calendario de cobro del bono extraordinario para el 3er IFE. <br/>
                La titular del ANSES <strong>Fernanda Raverta</strong> declaró, "Antes de fin de mes se anunciará cómo sigue el IFE, ya que en Octubre habría que pagarlo de nuevo." <br/>
                Si bien la situación a nuestro entender amerita un nuevo pago del IFE, ya que el número de contagios por COVID 19 aumentó a nivel país y también el número de fallecidos, Raverta dijo que "dentro del gabinete se <strong>está estudiando</strong> como avanza la pandemia y como impactaron las rondas anteriores de esta misma ayuda en las familias alcanzadas". <br/> 
                También dijo que "La pandemia en sí, va ofreciendo una realidad distinta a cada momento, por eso no podemos decir ni cuántos IFE habrá, ni cómo serán. Lo que hacemos todo el tiempo es revisar en función de la salud y la situación económica y a partir de ahí tomar las decisiones".
                <br/>
                Por su parte, el ministro de economía <strong>Martín Guzman</strong>, declaró que se mantendrán las medidas que se consideren necesarias para proteger a los sectores más vulnerables. También señaló que "La pandemia no cedió, pero a pesar de nuestras firmes restricciones fiscales, vamos a seguir tomando medidas acordes para seguir protegiendo a los que tengamos que proteger."
                Teniendo en cuenta que hoy es el último día del mes de Septiembre y que el calendario de asignaciones del mes Octubre ya está oficializado <strong>¿Crees que se abonará el 4to IFE?</strong>.
                <br/>
                Dejamos conocer que pensas en los comentarios de Facebook.
                <>
                <h4 className="my-3">Temas Relacionados</h4>
                <Relacionados />
                </>
            </>
        } />
    );
}

export default CuartoIFE;