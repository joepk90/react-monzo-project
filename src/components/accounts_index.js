import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class AccountsIndex extends Component {

componentWillMount() {
  this.props.fetchTransactions();
}

  render() {
    return (
      <div>
        <h1>Your Accounts!</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {accounts: state.accounts.all};
}

export default connect(mapStateToProps, { fetchTransactions })(AccountsIndex);
