import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
// import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {history, store} from "./store";
import { ConnectedRouter } from 'connected-react-router'
// import {PersistGate} from "redux-persist/integration/react";
// import createStore from "./store";

// const {store, persistor} = createStore();


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
