import {SET_CART_TOTAL} from '../constants';

let sum = {
  cartTotal: ''
}

export default (state = sum, action) => {
    switch (action.type) {
      case SET_CART_TOTAL:
        const {cartTotal} = action;
        sum = {
          cartTotal
        }
        return sum;
      default:
        return state;
    }
}
