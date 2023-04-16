import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducer';
const store = createStore(rootReducer); //takes reducer

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);

root.render(<Provider store={store} ><App name="Kanav" char=" is awesome"/></Provider>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
