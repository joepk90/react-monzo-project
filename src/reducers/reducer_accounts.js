import { FETCH_TRANSACTIONS } from '../actions/index'
const INITIAL_STATE = { all: [], post: null};


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TRANSACTIONS:
      return {...state, post: action.payload.data};
    default:
      return state;
  }
}
