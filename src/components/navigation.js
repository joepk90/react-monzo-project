import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  render() {
    return (
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <Link to="/accounts" query={this.props.query} className="nav-item nav-link" data-toggle="tab" role="tab">Accounts</Link>
            <Link to="/transactions" query={this.props.query} className="nav-item nav-link" data-toggle="tab" role="tab">Transactions</Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
