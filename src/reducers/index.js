import { combineReducers } from 'redux';
import AccountsReducer from './reducer_accounts';
import TransactionsReducer from './reducer_transactions';

const rootReducer = combineReducers({
  accounts: AccountsReducer,
  transactions: TransactionsReducer
});

// const store = createStore(
//   rootReducer,
//   AccountsReducer
// );

export default rootReducer;
