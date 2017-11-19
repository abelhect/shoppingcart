import {combineReducers} from 'redux';
import products from './reducer_products';
import search from './reducer_query';

export default combineReducers({
  products,
  search
})
