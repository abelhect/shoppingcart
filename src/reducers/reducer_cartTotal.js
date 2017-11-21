import {SET_CART_TOTAL} from '../constants';

// let sum = {
//   cartTotal: ''
// }

export default (state = 0, action) => {
    switch (action.type) {
      case SET_CART_TOTAL:
        const {cartTotal} = action;
        // sum = {
        //   cartTotal
        // }
        return cartTotal;
      default:
        return state;
    }
}
