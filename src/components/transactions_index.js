import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTransactions } from '../actions/index';

import TransactionsList from '../containers/transactions_list'

class TransactionsIndex extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchTransactions();
    // console.log(this.props);
  }

onClick(event) {
  event.preventDefault();
  this.props.fetchTransactions()

console.log(this.props);

}

renderOptionHeaders() {

  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">Accounts</a>
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">Transactions</a>
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">Balance</a>
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">transactions</a>
      </div>
    </nav>
  );

}

  render() {
    return (
      <div>
      <h1>Accounts</h1>
          {this.renderOptionHeaders()}
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
