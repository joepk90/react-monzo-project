import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// const clientId = '';
// const clientSecret = '';
const randomString = "aefhiewuhFGIWEFIEWIFBI";

const url = new URL(window.location.href);
const code = url.searchParams.get("code");
const urlState = url.searchParams.get("state");


  const monzoClientId = "add clientid code here";
  const redirectUrl = "http://localhost:8080";


//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send


class MonzoRequest extends Component {

  constructor(props) {
      super(props);

      this.state = {
        term: ''
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
      // console.log(event.target.value)
      this.setState({ term: event.target.value});
    }


    onFormSubmit(event) {
      event.preventDefault();

      const redirectUrl = "http://localhost:8080/";
      const monzoClientId = this.state.term;
      const randomString  = "alfjeifhwei";

      const url = "https://auth.monzo.com/?client_id=" + monzoClientId + "&redirect_uri=" + encodeURI(redirectUrl) + "&response_type=code&state=" + randomString;
      console.log(url);
      window.location.href = url;

}

  render() {
    return (
      <div>
            <h2>Monzo Accounts</h2>
            <form onSubmit={this.onFormSubmit} className="input-group">
            <input className="form-control" type="text" placeholder="Provide your Monzo Client ID" value={this.state.term} onChange={this.onInputChange} />
            <span className="input-group-btn" >
                <button type="submit" className="btn btn-secondary">Login</button>
            </span>
            </form>
      </div>
    );
  }
}

export default MonzoRequest
