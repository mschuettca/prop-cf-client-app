import React, { Component } from 'react';
import './App.css';
import './PropertyCashFlow.css';

//import './App.css';
const ownerIdNameMap = ['Judith','Sarah','Overall'];


class PaymentDetails extends Component {
  render() {
    const ownerId = this.props.match.params.ownerId;
    const ownerName = ownerIdNameMap[ownerId];

    return (
        <div>
        <h2>Payment Details</h2>
        <h2>{ownerName}</h2>
        <h2>..............................Coming Soon.......................................</h2>
        </div>
    );
  }
}
export default PaymentDetails;
