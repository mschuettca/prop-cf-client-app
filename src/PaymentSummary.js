import React, { Component } from 'react';
import './PropertyCashFlow.css';

class PaymentSummary extends Component {
  render() {
      // enum PaymentStatus {PENDING, PAID};
    var strMapping = ['Pending', 'Paid'];
    var styles = [{color: 'red'}, {color: 'green'}];

 //   var shareUser = this.props.user.share * 100;
    console.log("OwnerId: " + this.props.ownerId);
    const amountDue = this.props.amountdue[this.props.ownerId];

    return (
          <div className="PaymentSummary">
          <h2>Payment Summary Info</h2>
          <table id="payment-summary" className="center">
            <tr>
              <th>Date Due</th>
              <th>Total Amount Due</th>
              <th>Min Payment</th>
              <th>Total Paid to Date</th>
              <th>Paid this Period</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>{amountDue.dueDate}</td>
              <td>${amountDue.amountDue}</td>
              <td>${amountDue.minPayment}</td>
              <td>${amountDue.amountPaidUp}</td>
              <td>${amountDue.paidThisMonth}</td>
              <td style={styles[amountDue.status]}>{strMapping[amountDue.status]}</td>
            </tr>
          </table>
        </div>
    );
  }
}
export default PaymentSummary;
