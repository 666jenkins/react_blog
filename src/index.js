import { HashRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

ReactDOM.render(

    <HashRouter>
        <App />
    </HashRouter>
    ,
    document.getElementById('root')
);


