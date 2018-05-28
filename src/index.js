import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(reducer);
ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
// registerServiceWorker();
