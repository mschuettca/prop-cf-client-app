import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionList extends Component {
  render() {
    var transactions = this.props.transactions.map((transaction) =>
      <Transaction key={transaction.id} transaction={transaction}/>
    );
    return (
         /*   <div className="user-summary-container">*/

      <table id="transaction-list" className="center">
        <tbody>
            <tr>
              <th className="col-Date">Date</th>
              <th className="col-Type">Type</th>
              <th className="col-Category">Category</th>
              <th className="col-Payee">Payee</th>
              <th className="col-Cost">Cost</th>
              <th className="col-Description">Description</th>
            </tr>
            {transactions}
        </tbody>
      </table>
              /*     </div> */
    );
  }
}
export default TransactionList;
