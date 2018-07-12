import React, { Component } from 'react';
import OwnerTabs from './OwnerTabs';
import './App.css';
import './PropertyCashFlow.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

//import UserAmountDue from './UserAmountDue';
//import UserInfo from './UserInfo';
//import PaymentDetails from './PaymentDetails';
import Home from './Home';
import Overall from './Overall';
import Faq from './Faq';

class UsersView extends Component {

  render() {
  //  var shareJudith = this.props.users[0].share * 100;
  //  var shareSarah = this.props.users[1].share * 100;
  //  var adJ = this.props.amountdue[0];
  //  var userJ = this.props.users[0];
  //  {...this.props.amountdue[0]} {...this.props.users[0]}
 //                        <Route exact={true} path="/" render={() => (<UserAmountDue amountdue={this.props.amountdue} users={this.props.users} />)}/>
 // <Route exact={true} component={() => <UserAmountDue amountdue={this.props.amountdue[0]} users={this.props.users[0]} />}/>

    return (

            <div className="user-summary-container">
                  <div className="UserApp">
                  <Router>
                      <div className='nav' style={{width: 1000, margin: '0 auto'}}>
                      <nav>
                          <ul>
                            <li><NavLink exact activeClassName='current' to='/'>Home</NavLink></li>
                            <li><NavLink exact activeClassName='current' to='/owner/0'>{this.props.amountdue[0].name}</NavLink></li>
                            <li><NavLink exact activeClassName='current' to='/owner/1'>{this.props.amountdue[1].name}</NavLink></li>
                            <li><NavLink exact activeClassName='current' to='/overall'>Overall</NavLink></li>
                            <li><NavLink exact activeClassName='current' to='/Faq'>FAQ</NavLink></li>
                          </ul>
                      </nav>
                      <hr/>
                      <Switch>
                          <Route exact path='/' component={Home} />
                          <Route path='/owner/:ownerId' render={(props) => <OwnerTabs {...props} amountdue={this.props.amountdue} users={this.props.users}/>} />
                          <Route exact path='/faq' component={Faq} />
                          <Route exact path='/overall' component={Overall} />
                      </Switch>
                      </div>
                  </Router>
                  </div>
            </div>
    );
  }
}
export default UsersView;
