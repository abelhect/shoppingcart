import {combineReducers} from 'redux';
import products from './reducer_products';
import search from './reducer_query';
import cartTotal from './reducer_cartTotal';

export default combineReducers({
  products,
  search,
  cartTotal
})
