import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Store'

reactDom.render(
    <Provider store = {Store}>
    <App/>
    </Provider>, 
    document.querySelector('#root')
)