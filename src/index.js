import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import styles from './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/NavBar/AuthContext';
import { ToastContainer } from 'react-bootstrap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <ToastContainer/>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
