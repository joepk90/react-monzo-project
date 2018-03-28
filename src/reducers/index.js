import { combineReducers } from 'redux';
import AccountsReducer from './reducer_accounts';

const rootReducer = combineReducers({
  posts: AccountsReducer,
});

export default rootReducer;
