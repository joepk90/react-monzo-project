// import { FETCH_TRANSACTIONS } from '../actions/index'
// const INITIAL_STATE = { all: []};


export default function(state = null, action) {
  switch(action.type) {
    case 'FETCH_TRANSACTIONS':
    console.log(action.payload.data);
      return action.payload.data;
    }
      return state;

}
