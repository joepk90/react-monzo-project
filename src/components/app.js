import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MonzoRequest from './monzo';

class App extends Component {
  constructor(props) {
    super(props)

      this.state = {isLoggedIn: false}
      this.checkAuth = this.checkAuth.bind(this);
      this.testCall = this.testCall.bind(this);
  }

  // testCall() {
  //   const ROOT_URL = 'https://api.monzo.com/';
  //   const ACCESS_TOKEN = '?key=sgjvwojsggowrgoworg';
  //   const AUHTORISATION_CODE = ''
  //   const CLIENT_ID = '';
  //   const CLIENT_SECRET = '';
  //   const REDIRECT_URI = '';
  //   const request = axios.get(`${ROOT_URL}/oauth2/token/grant_type=authorization_code/client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=$${REDIRECT_URI}&code=${AUHTORISATION_CODE}`)
  //
  //   console.log(request);
  //
  // }

  checkAuth() {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const urlState = url.searchParams.get("state");
    const randomString  = "aefhiewuhFGIWEFIEWIFBI";

    if ( code !== null || urlState === randomString ) {
          // console.log('I am logged in.')
          this.setState({ isLoggedIn: true});
          this.testCall()
    }
  }

  componentWillMount() {
      this.checkAuth();
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const app = (isLoggedIn === true) ? this.props.children : ( <MonzoRequest /> );

    return (
      <div>
        {app}
      </div>
    );
  }
}

 ReactDOM.render(<App />, document.querySelector('.container'));
