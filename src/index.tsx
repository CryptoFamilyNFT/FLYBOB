import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EtherProvider from './ethers/EtherProvider';

const rootElement = document.getElementById('root') as Element;
const root = createRoot(rootElement);
root.render(
    <EtherProvider>
        <App />
    </EtherProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
