import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

      const redirectUrl = "http://localhost:8080/accounts";
      const monzoClientId = this.state.term;
      //TODO add random string to application state
      const randomString  = "aefhiewuhFGIWEFIEWIFBI";

      const url = "https://auth.monzo.com/?client_id=" + monzoClientId + "&redirect_uri=" + encodeURI(redirectUrl) + "&response_type=code&state=" + randomString;
      // console.log(url);
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
