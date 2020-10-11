import React from 'react';

function PoliticaPrivacidad() {

    React.useEffect(() => {
        window.scrollBy(0, 0)
    }, []);

    return (
        <div className="container mx-5 px-5">
            <strong>POLÍTICA DE PRIVACIDAD</strong> <br/> 
            En la presente Política de Privacidad se establecen los términos en los que se usa y se protege la información que es proporcionada por sus visitantes al momento de utilizar nuestro sitio web. Estamos totalmente comprometidos con la seguridad de los datos de nuestros usuarios. <br/>
            Información que es recogida <br/>
            Nuestra web podrá recoger información personal por ejemplo: Nombre,  información de contacto (como su dirección de email) e información demográfica. En caso de necesitar información más específica, se le hará saber de ante mano.
            <br/>
            <strong>Uso de la información recogida</strong>
            <br/>
            En caso de almacenar información, el motivo principal sería proporcionar el mejor servicio posible, mejorar nuestros productos y servicios. No se enviarán correos electrónicos periódicamente a menos que previamente el usuario lo haya aceptado. Estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
            <br/>
            Con el objetivo de mantener su información segura, usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado. <br/>
            <strong>Cookies</strong> <br/>
            Una cookie se refiere a un fichero que es almacenado localmente en su dispositivo con la finalidad de facilitar futuras visitas y hacerlas más rápidas.
            <br/>
            <strong>Enlaces a Terceros</strong>
            <br/>
            Nuestra página puede contener enlaces a otros sitios. Una vez que usted de click en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.
            <br/>
            <strong>Control de su información personal</strong>
            <br/>
            Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
            <br/>
            No venderemos ni distribuiremos la información personal que es recopilada sin su consentimiento, salvo alguna cuestión legal.
            <br/>
            Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
       </div>
    );
}

export default PoliticaPrivacidad;