import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

// Posts Anses
import JubiladosPensionados from './ArticlesPages/Anses/Juiblados-Pensionados';
import PrestamoUHSUAF from './ArticlesPages/Anses/PrestamoUH-SUAF';
import PrestamoPensionNoContributiva from './ArticlesPages/Anses/PrestamoPensionNoContributiva';
import PrestamoPensionUniversal from './ArticlesPages/Anses/PrestamoPensionUniversal';
import AsignacionPorNyA from './ArticlesPages/Anses/AsignacionPorNyA';
import AsignacionMaterD from './ArticlesPages/Anses/AsignacionPorMaterD';
import AsignacionPorPrenatal from './ArticlesPages/Anses/AsignacionPorPrenatal';
import AsignacionPorEmbarazo from './ArticlesPages/Anses/AsignacionPorEmbazaro';
import AsignacionFH from './ArticlesPages/Anses/AsignacionFH';
import AsignacionUH from './ArticlesPages/Anses/AsignacionUH';
import TarjetaAlimentar from './ArticlesPages/Anses/TarjetaAlimentaria';
import SeguroDesempleo from './ArticlesPages/Anses/SeguroDesempleo';
import IFE from './ArticlesPages/Anses/IFE';

// Procrear
import CreditoConstruccion from './ArticlesPages/Procrear/CreditoConstruccion';
import CreditoMejoraGas from './ArticlesPages/Procrear/CreditoMejoraGas';
import CreditoRefaccion from './ArticlesPages/Procrear/CreditoRefaccion';
import CreditoSustentable from './ArticlesPages/Procrear/CreditoSustentable';
import CreditoAmpliacion from './ArticlesPages/Procrear/CreditoAmpliacion';
import CreditoComMat from './ArticlesPages/Procrear/CreditoComMat';
import Procrear from './ArticlesPages/Temas/Procrear';


// Posts Afip
import ClaveFiscal from './ArticlesPages/Afip/ClaveFiscal';
import FacturaElectronica from './ArticlesPages/Afip/FacturaElectrónica';
import FormularioCeta from './ArticlesPages/Afip/FormularioCeta';
import GenerarVEP from './ArticlesPages/Afip/GenerarVEP';
import InscripcionMonotributo from './ArticlesPages/Afip/InscripcionMonotributo';
import TurnoAfip from './ArticlesPages/Afip/TurnoAfip';


// Posts Renaper
import TramiteDNI from './ArticlesPages/Renaper/TramiteDNI';
import CertCasamiento from './ArticlesPages/Renaper/CertCasamiento';
import CertNacimiento from './ArticlesPages/Renaper/CertNacimiento';
import CertDefuncion from './ArticlesPages/Renaper/CertDefuncion';
import TramitePasaporte from './ArticlesPages/Renaper/TramitePasaporte';


// Posts Automotor
import CedulaAzul from './ArticlesPages/AutoMotor/CedulaAzul';
import TituloAutomotor from './ArticlesPages/AutoMotor/TituloAutomotor';
import TransferenciaAutomotor from './ArticlesPages/AutoMotor/TransferenciaAutomotor';
import TurnoAutomotor from './ArticlesPages/AutoMotor/TurnoAutomotor';
import Patentamiento from './ArticlesPages/AutoMotor/Patentamiento';


// Noticias
import CuartoIFE from './ArticlesPages/Noticias/CuartoIFE';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';


export default function App() {
  return (
    <>
      <Route component={Header} />
      <Switch>
        <Route path='/Noticias/Cuarto-IFE' exact={true} component={CuartoIFE} />
        <Route path='/Procrear/credito-para-construccion' exact={true} component={CreditoConstruccion} />
        <Route path='/Procrear/credito-para-ampliacion' exact={true} component={CreditoAmpliacion} />
        <Route path='/Procrear/credito-para-mejora-gas' exact={true} component={CreditoMejoraGas} />
        <Route path='/Procrear/credito-para-refaccion' exact={true} component={CreditoRefaccion} />
        <Route path='/Procrear/credito-hogar-sustentable' exact={true} component={CreditoSustentable} />
        <Route path='/Procrear/credito-personal-compra-materiales' exact={true} component={CreditoComMat} />
        <Route path='/Procrear' exact={true} component={Procrear} />
        <Route path='/Automotor/patentamiento-automotor' exact={true} component={Patentamiento} />
        <Route path='/Automotor/turno-registro-automotor' exact={true} component={TurnoAutomotor} />
        <Route path='/Automotor/transferencia-automotor' exact={true} component={TransferenciaAutomotor} />
        <Route path='/Automotor/titulo-automotor' exact={true} component={TituloAutomotor} />
        <Route path='/Automotor/tramite-cedula-azul' exact={true} component={CedulaAzul} />
        <Route path='/Renaper/tramite-pasaporte' exact={true} component={TramitePasaporte} />
        <Route path='/Renaper/certificado-de-defuncion' exact={true} component={CertDefuncion} />
        <Route path='/Renaper/certificado-de-nacimiento' exact={true} component={CertNacimiento} />
        <Route path='/Renaper/certificado-de-casamiento' exact={true} component={CertCasamiento} />
        <Route path='/Renaper/tramite-dni' exact={true} component={TramiteDNI} />
        <Route path='/Anses/ingreso-familiar-de-emergencia' exact={true} component={IFE} />
        <Route path='/Anses/tarjeta-alimentaria' exact={true} component={TarjetaAlimentar} />
        <Route path='/Anses/seguro-de-desempleo' exact={true} component={SeguroDesempleo} />
        <Route path='/Anses/asignacion-por-maternidad-down' exact={true} component={AsignacionMaterD} />
        <Route path='/Anses/asignacion-por-nacimiento-y-adopcion' exact={true} component={AsignacionPorNyA} />
        <Route path='/Anses/asignacion-por-prenatal' exact={true} component={AsignacionPorPrenatal} />
        <Route path='/Anses/asignacion-por-embarazo' exact={true} component={AsignacionPorEmbarazo} />
        <Route path='/Anses/asignacion-familiar-por-hijo' exact={true} component={AsignacionFH} />
        <Route path='/Anses/asignacion-universal-por-hijo' exact={true} component={AsignacionUH} />
        <Route path='/Anses/prestamos-jubilados-y-pensionados' exact={true} component={JubiladosPensionados} />
        <Route path='/Anses/prestamos-AUH-y-SUAF' exact={true} component={PrestamoUHSUAF} />
        <Route path='/Anses/prestamos-pension-no-contributiva' exact={true} component={PrestamoPensionNoContributiva} />
        <Route path='/Anses/prestamos-pension-universal-por-vejez' exact={true} component={PrestamoPensionUniversal} />
        <Route path='/Afip/turnos-afip' exact={true} component={TurnoAfip} />
        <Route path='/Afip/Inscripcion-monotributo' exact={true} component={InscripcionMonotributo} />
        <Route path='/Afip/generar-vep' exact={true} component={GenerarVEP} />
        <Route path='/Afip/factura-electronica' exact={true} component={FacturaElectronica} />
        <Route path='/Afip/formulario-ceta' exact={true} component={FormularioCeta} />
        <Route path='/Afip/clave-fiscal' exact={true} component={ClaveFiscal} />
        <Route path='/politicas-de-privacidad' exact={true} component={PoliticaPrivacidad} />
        <Route path='/' exact={true} component={HomePage} />
      </Switch>
      <Route component={Footer} />
    </>
  );
}
