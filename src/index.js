import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import MonzoRequest from './components/monzo';

//TODO Setup React Router / Rename AppHold
class AppHold extends Component {
  constructor(props) {
    super(props)

      this.state = {isLoggedIn: false}
      this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth() {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const urlState = url.searchParams.get("state");
    const randomString  = "aefhiewuhFGIWEFIEWIFBI";

    if ( code !== null || urlState === randomString ) {
          // console.log('I am logged in.')
          this.setState({ isLoggedIn: true});
    }
  }

  componentWillMount() {
      this.checkAuth();
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const app = (isLoggedIn === true) ? ( <App /> ) : ( <MonzoRequest /> );

    return (
      <div>
        {app}
      </div>
    );
  }
}

 ReactDOM.render(<AppHold />, document.querySelector('.container'));
