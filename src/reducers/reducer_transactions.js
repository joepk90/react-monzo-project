export default function(state = null, action) {
  switch(action.type) {
    case 'FETCH_TRANSACTIONS':
      return action.payload.data;
    }
      return state;

}
