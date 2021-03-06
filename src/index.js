import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locals/es";
import localeEnMessages from "./locals/en";


let localeLang = "";
let localeMessages;

function language() {
  let idioma = navigator.language || navigator.userLanguage;
  if (idioma.startsWith("es")) {
    localeLang = "es";
    localeMessages = localeEsMessages;
  } else if (idioma.startsWith("en")) {
    localeLang = "en";
    localeMessages = localeEnMessages;
  } else {
    localeLang = "en";
    localeMessages = localeEnMessages;
  }
}

language();


ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={localeLang} messages={localeMessages}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if (navigator.onLine) {
  serviceWorkerRegistration.register();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
