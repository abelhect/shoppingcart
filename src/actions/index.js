import {SET_PRODUCTS, SET_SEARCHBAR_QUERY} from '../constants';

export function setProducts(products){
  const action = {
    type: SET_PRODUCTS,
    products
  }
  return action;
}

export function setSearchbarQuery(query){
  const action = {
    type: SET_SEARCHBAR_QUERY,
    query
  }
  return action;
}
