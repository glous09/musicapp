import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';
import store from './store/configStore';
import {Provider} from 'react-redux'

<<<<<<< HEAD
const store = configureStore();


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
=======
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
>>>>>>> 69acc29898ee57a490c05a6616c71aa5e965f7cd
registerServiceWorker();
