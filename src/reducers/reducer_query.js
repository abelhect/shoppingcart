import {SET_SEARCHBAR_QUERY} from '../constants';

let search = {
  query: ''
}

export default (state = search, action) => {
  switch (action.type) {
    case SET_SEARCHBAR_QUERY:
    const {query} = action;
    search = {
      query
    }
    return search;
  default:
    return state;
  }
}
