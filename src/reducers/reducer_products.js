import {SET_PRODUCTS} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const {products} = action;
      return products;
    default:
      return state;
  }
}
