import React from 'react';
import ReactDOM from 'react-dom/client'; // Assure-toi d'importer `react-dom/client`
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root'); // Récupérer l'élément par ID
if (rootElement) { // Vérifie si l'élément existe
    const root = ReactDOM.createRoot(rootElement); // Crée la racine
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
} else {
    console.error("Element with ID 'root' not found"); // Affiche un message d'erreur si l'élément n'existe pas
}
