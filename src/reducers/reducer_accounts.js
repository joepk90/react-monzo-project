export default function(state = null, action) {
  switch(action.type) {
    case 'FETCH_ACCOUNTS':
      return action.payload.data;
    }
      return state;

}
