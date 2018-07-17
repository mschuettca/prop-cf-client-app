import React, { Component } from 'react';
//import './PropertyCashFlow.css';
import './App.css';
import TransactionList from './TransactionList';
import UsersView from './UsersView';

class PropertyCashFlow extends Component {
    amountdue;
    users;
    transactions;

  constructor(props) {
    super(props);
    this.state = {
      payDueJudith: [],
      userInfoJudith: [],
      payDueSarah: [],
      userInfoSarah: [],
      transactions: [],
      isLoading: false
    };
  }
  setTransactions(transactions) {
      this.transactions = transactions;
  }
  componentDidMount() {
      const hostname = window && window.location && window.location.hostname;

      var REST_HOST = hostname;
      var REST_PORT = '8080';
      this.setState({isLoading: true});

      fetch('http://' + REST_HOST + ':' + REST_PORT + '/transactions')
          .then(response => response.json())
          .then(data => this.setState({transactions: data, isLoading: false}));

      fetch('http://' + REST_HOST + ':' + REST_PORT + '/user-amount-due/Judith')
      .then(response => response.json())
      .then(data => this.setState({payDueJudith: data, isLoading: false}));

      fetch('http://' + REST_HOST + ':' + REST_PORT + '/user-amount-due/Sarah')
      .then(response => response.json())
      .then(data => this.setState({payDueSarah: data, isLoading: false}));

      fetch('http://' + REST_HOST + ':' + REST_PORT + '/users/Judith')
      .then(response => response.json())
      .then(data => this.setState({userInfoJudith: data, isLoading: false}));

      fetch('http://' + REST_HOST + ':' + REST_PORT + '/users/Sarah')
      .then(response => response.json())
      .then(data => this.setState({userInfoSarah: data, isLoading: false}));
  }
  onQuery() {
      return('OnQuery...');
  }
  render() {
      if (this.state.isLoading) {
        return <p>Loading Transaction list...</p>;
      }
      let paymentDue = [];
      paymentDue[0] = this.state.payDueJudith;
      paymentDue[1] = this.state.payDueSarah;

      let userInfo = [];
      userInfo[0] = this.state.userInfoJudith;
      userInfo[1] = this.state.userInfoSarah;

      return (
              <div className="PropertyCashFlow">
                <UsersView amountdue={paymentDue} users={userInfo}/>
                <div className="list-container">
                  <h2>Transaction History</h2>
                  <TransactionList transactions={this.state.transactions}/>
                </div>
              </div>
      );
      // Add the following to above render   <PaymentQueryDialog user="Judith" onQuery={this.onQuery}/>

  }
}
export default PropertyCashFlow;
