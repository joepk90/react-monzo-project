import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
// import routes from './routes';
import promise from 'redux-promise';

import AccountsIndex from './components/accounts_index';
import TransactionsIndex from './components/transactions_index';
import MonzoAuth from './components/monzo';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/transactions" component={TransactionsIndex} />
          <Route path="/accounts" component={AccountsIndex} />
          <Route path="/" component={MonzoAuth} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
