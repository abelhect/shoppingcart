import {SET_PRODUCTS, SET_SEARCHBAR_QUERY, SET_CART_TOTAL} from '../constants';

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

export function setCartTotal(cartTotal){
  const action = {
    type: SET_CART_TOTAL,
    cartTotal
  }
  return action;
}
