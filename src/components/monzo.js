import React, { Component } from 'react';
// import Monzo from 'monzo-js';

// const clientId = '';
// const clientSecret = '';
const state = "aefhiewuhFGIWEFIEWIFBI";

const url = new URL(window.location.href);
const code = url.searchParams.get("code");
const urlState = url.searchParams.get("state");

if ( !code || !urlState == state) {

  const monzoClientId = "add clientid code here";
  const redirectUrl = "http://localhost:8080";

  const url = "https://auth.monzo.com/?client_id=" + monzoClientId + "&redirect_uri=" + encodeURI(redirectUrl) + "&response_type=code&state=" + state;
  //console.log(url);
  window.location.href = url;

}

console.log(code);


//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send


class MonzoRequest extends Component {


  render() {
    return (
      <div>
            <h2>React simple starter</h2>
      </div>
    );
  }
}

export default MonzoRequest
