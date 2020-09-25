import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

// ReactDOM.render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById('root')
// )

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<HashRouter><App /></HashRouter>, rootElement);
  } else {
    ReactDOM.render(<HashRouter><App /></HashRouter>, rootElement);
  }
