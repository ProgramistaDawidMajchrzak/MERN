import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//1-redux

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

//1-redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

