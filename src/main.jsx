import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import resources from './components/transitions';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import configureStore from "./components/store/configureStore";

const store = configureStore();
const defaultLanguage = ["azerbaycan"]
i18next.use(LanguageDetector, initReactI18next,).init({
  resources,
  fallbackLng: defaultLanguage,
  interpolation: { escapeValue: true },
  lng: window.localStorage.getItem('i18nextLng'),
  debug: false,
})

ReactDOM.createRoot(document.getElementById('vitejs')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
