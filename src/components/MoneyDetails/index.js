// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDateils extends Component {
  render() {
    const {inc} = this.props
    return (
      <>
        <li className="item green">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="cardimg"
          />
          <div className="namec">
            <p className="title">Your Balance</p>
            <p data-testid="balanceAmount" className="money">
              0
            </p>
          </div>
        </li>
        <li className="item blue">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="cardimg"
          />
          <div className="namec">
            <p className="title">Your Income</p>
            <p data-testid="incomeAmount" className="money">
              {inc}
            </p>
          </div>
        </li>
        <li className="item grey">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="cardimg"
          />
          <div className="namec">
            <p className="title">Your Expenses</p>
            <p data-testid="expensesAmount" className="money">
              0
            </p>
          </div>
        </li>
      </>
    )
  }
}
export default MoneyDateils
