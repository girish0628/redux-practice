import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Create store using reducer and apply middleware to make the request syncronize as per requirement
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);