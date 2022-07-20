import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {GlobalProvider} from "./context/global/global.context";
//import {I18nextProvider} from "react-i18next";
//import i18n from "./config/localization/translations/i18n";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <GlobalProvider>
        <App />
      </GlobalProvider>
  </React.StrictMode>
)

//<I18nextProvider i18n={i18n} >
//</I18nextProvider>