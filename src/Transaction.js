import React, { Component } from 'react';

class Transaction extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.transaction.date}</td>
        <td>{this.props.transaction.type}</td>
        <td>{this.props.transaction.category}</td>
        <td>{this.props.transaction.payee}</td>
        <td className="tr-Cost">{this.props.transaction.cost}</td>
        <td>{this.props.transaction.description}</td>
      </tr>
    );
  }
}
export default Transaction;
