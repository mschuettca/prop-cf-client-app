import React, { Component } from 'react';
 
class Faq extends Component {
  render() {
    return (
      <div className="FAQ">
        <h2>FAQ</h2>
        <div className="FAQBody">
        <p>Please read the following frequently asked questions for a more detailed explanation of how the ownership shares and obligations work.</p>
        <ol>
        <div className="FAQQuestion">
          <li>What is the PaymentSummary page ?</li>
        </div>
              This page shows info about each person's payments during the current payment period.
              The Payment period covers 1 month for Judith and 2 months for Sarah (so she can minimize fees
              associated with wiring CDN$)
              Date Due - payment due date for start of payment period
              Total Amount Due - current total remaining to be paid off (Total Expenses - rent - total payments so far)
              Min Payment - minimum payment required for this pay period
              Total Paid to Date - Total payments since ownership started
              Paid this Period - Total payment this pay period (month for Judith, 2 months for Sarah)
              Status - Paid or Pending
          <div className="FAQQuestion">
          <li>What is the Property Owner Info page ?</li>
          </div>
              Shows summary info for each owner. Grace Period refers to how many days are allowed before a late fee
              is accessed.
          <div className="FAQQuestion">
          <li>How is the Total Amount Due calculated ?</li>
          </div>
              (Total of all expenses since day one - total rental income) * ownership percentage
          <div className="FAQQuestion">
          <li>Why 2 months and smaller Min Payments for Sarah ?</li>
          </div>
              Sarah will be paying more lump sum payments and less frequent and smaller monthly payments - this is
              done to minimize overhead charges for converting CDN$ and wiring expenses.
          <div className="FAQQuestion">
          <li>How long will I be paying these minimum payments ?</li>
          </div>
              The payments are required as long as there is a total balance owing. At some point the expenses will
              be paid off and the payments required will either be less than the minimum payment shown or not at all.
              Once the rental income exceeds the expenses, there will be a net profit and this money will be added
              back into the bank account for the property. Balance in this account will be used to pay for future expenses.
          <div className="FAQQuestion">
          <li>Where will the money be held ?</li>
          </div>
              There will be 2 accounts. Currently we have a bank account dedicated to payments of expenses pertaining
              to the property. All payments from Judith and Sarah (and Michael/Camilla) go into this account. All expenses
              are paid from this account. The second account will be the Probate account during the Probate period which
              can last up to a year or so. All rent payments will be deposited into this account since they are payable
              to the Estate of Joshua Schuett. Any of Joshua's account balances will also go into this account and can be used
              for funding the property once Probate is finished.
         </ol>
        </div>
      </div>
    );
  }
}
 
export default Faq;
