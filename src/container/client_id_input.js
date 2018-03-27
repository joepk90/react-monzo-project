import React, { Component }, from 'react';

class clientIdInput extends component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
     };
    }
   render() {
     return (
       <div>
             <h2>Monzo Accounts</h2>
             <form onSubmit={handleSubmit(monzoClientId)}>
             <input type="text" placeholder="Please provide your Monzo Client ID"></input>
             <button>Login</button>
             </form>
       </div>
     )
   }
}
