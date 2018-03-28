import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import AccountsIndex from './components/accounts_index';

export default (
   <Route path="/" component={App} >
      <IndexRoute component={AccountsIndex} />
      <Route path="accounts" component={AccountsIndex} />

   </Route>
);
