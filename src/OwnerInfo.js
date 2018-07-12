import React, { Component } from 'react';
import './PropertyCashFlow.css';

class OwnerInfo extends Component {
  render() {
    const ownerId = this.props.match.params.ownerId;
    console.log("OwnerInfo Component - MatchProps OwnerId: " + ownerId);
    console.log("OwnerInfo Component - Props OwnerId: " + this.props.ownerId);
    const userInfo = this.props.users[this.props.ownerId];

    return (
        <div className="UserInfo">
          <h2>Property Owner Info</h2>
          <table id="payment-summary" className="center">
            <tr>
              <th>Ownership Share</th>
              <th>Min Payment</th>
              <th>Payment Frequency</th>
              <th>Grace Period</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>{userInfo.share * 100}%</td>
              <td>${userInfo.paymentLimit}</td>
              <td>{userInfo.paymentType}</td>
              <td>{userInfo.gracePeriodDays} days</td>
              <td>{userInfo.description}</td>
            </tr>
          </table>
        </div>

    );
  }
}
export default OwnerInfo;
