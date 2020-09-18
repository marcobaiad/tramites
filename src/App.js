import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import JubiladosPensionados from './ArticlesPages/Prestamos/Juiblados-Pensionados';
import AuhSuaf from './ArticlesPages/Prestamos/AUH-SUAF';

export default function App() {
  return (
    <>
      <Route component={Header} />
      <Route path='/Anses/prestamos/Jubilados-Pensionados' exact={true} component={JubiladosPensionados} />
      <Route path='/Anses/prestamos/AUH-SUAF' exact={true} component={AuhSuaf} />
      <Route path='/' exact={true} component={HomePage} />
    </>
  );
}
