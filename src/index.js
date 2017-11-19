import React from 'react';
import ReactDOM from 'react-dom';
// import {firebaseApp} from './firebase';
import './css/index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import ShoppingCart from './components/shoppingcart';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <ShoppingCart />
  </Provider>,
  document.getElementById("root"));
