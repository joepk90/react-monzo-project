import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTransactions } from '../actions/index';
import Navigation from './navigation';

import TransactionsList from '../containers/transactions_list'

class TransactionsIndex extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchTransactions();
    console.log(this.props);
  }

onClick(event) {
  event.preventDefault();
  this.props.fetchTransactions()

console.log(this.props);

}


  render() {
    return (
      <div>
      <h1>Transactions</h1>
        <Navigation />
        <TransactionsList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTransactions }, dispatch);
}

function mapStateToProps(state) {
  // console.log(accounts);
    return {transactions: state.transactions};
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);
