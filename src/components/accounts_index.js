import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAccounts } from '../actions/index';
import { Link } from 'react-router-dom';
import AccountsList from '../containers/accounts_list';
import Navigation from './navigation';

class AccountsIndex extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchAccounts();
    console.log(this.props);
  }

onClick(event) {
  event.preventDefault();
  this.props.fetchAccounts()

}

  render() {
    return (
      <div>
      <h1>Accounts</h1>
        <Navigation />
        <AccountsList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAccounts }, dispatch);
}

function mapStateToProps(state) {
  // console.log(accounts);
    return {accounts: state.accounts};
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsIndex);
