import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions/index';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router';


class TransactionsList extends Component {


RenderTransactions() {
console.log('state test: ',this.props);
    return this.props.transactions.map((transaction) => {
      return (
        <li key={transaction.id} className="list-group-item">{transaction.description}: {transaction.amount}</li>
        // <li key={account.id} className="list-group-item">Balance: {account.account_balance}</li>

      )
    })
}

render() {
  return (
    <div>
    <ul className="list-group col-sm-4">
      {this.RenderTransactions()}
    </ul>
    </div>
  );
}
}

function mapStateToProps(state) {
  console.log('state test', state);
  return {
    transactions: state.transactions
  };
}



export default connect(mapStateToProps)(TransactionsList);
