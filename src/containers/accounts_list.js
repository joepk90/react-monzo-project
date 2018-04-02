import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchTransactions } from '../actions/index';
import { fetchAccounts } from '../actions/index';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router';


class AccountsList extends Component {


RenderAccountData() {

    console.log(this.props);
    // return this.props.accounts.map((account) => {
    //   return (
    //     <li key={account.id} className="list-group-item">{account.description}: {account.type}</li>
    //     // <li key={account.id} className="list-group-item">Balance: {account.account_balance}</li>
    //
    //   )
    // })
}

render() {
  return (
    <div>
    <ul className="list-group col-sm-4">
      {this.RenderAccountData()}
    </ul>
    </div>
  );
}
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    accounts: state.transactions
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchTransactions: fetchTransactions}, dispatch);
// }

export default connect(mapStateToProps)(AccountsList);
