import React, { Component } from 'react';
import OwnerInfo from './OwnerInfo';
import PaymentSummary from './PaymentSummary';
import PaymentDetails from './PaymentDetails';
import Faq from './Faq';

import './App.css';
import './PropertyCashFlow.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

//import './App.css';
const ownerIdNameMap = ['Judith','Sarah','Overall'];

class OwnerTabs extends Component {

  render() {
    const ownerId = this.props.match.params.ownerId;
    const ownerName = ownerIdNameMap[ownerId];
    console.log("OwnerTabs Component - OwnerId: " + ownerId);

    return (
      <Router>
      <div className='nav'>
        <h2>{ownerName}</h2>
        <ul>
            <li><Link exact activeClassName='current' to={`/paysummary/${ownerId}`}>Payment Summary</Link></li>
            <li><Link exact activeClassName='current' to={`/paydetail/${ownerId}`}>Payment Details</Link></li>
            <li><Link exact activeClassName='current' to={`/ownerinfo/${ownerId}`}>Owner Info</Link></li>
        </ul>

        <hr />

        <Route path='/paysummary/:ownerId' render={(props) => <PaymentSummary {...props} ownerId={ownerId} amountdue={this.props.amountdue} users={this.props.users}/>} />
        <Route path='/ownerinfo/:ownerId' render={(props) => <OwnerInfo {...props} ownerId={ownerId} amountdue={this.props.amountdue} users={this.props.users}/>} />
        <Route path='/paydetail/:ownerId' component={PaymentDetails} />
      </div>
      </Router>
    )
  }
}
export default OwnerTabs;
