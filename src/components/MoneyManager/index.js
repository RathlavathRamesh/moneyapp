import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDateils from '../MoneyDetails'
import TracsactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {ItemList: [], title: '', type: '', amount: '', income: 0}

  gettitle = event => {
    this.setState({title: event.target.value})
  }

  gettype = event => {
    this.setState({type: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  deleteItem = id => {
    const {ItemList} = this.state
    const filtered = ItemList.filter(each => each.id !== id)
    this.setState({ItemList: filtered})
  }

  addItem = event => {
    event.preventDefault()
    const {title, type, amount} = this.state
    const item = {
      id: uuidv4(),
      title,
      type,
      amount,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png ',
    }

    this.setState(prev => ({
      ItemList: [...prev.ItemList, item],
      income: parseInt(prev.amount),
      title: '',
      amount: '',
    }))
  }

  render() {
    const {ItemList, title, type, amount, income} = this.state
    console.log(ItemList)
    return (
      <div className="bgContainer">
        <div className="nameCard">
          <h1 className="name">Hi,Richard</h1>
          <p>
            Welcome back to Your <span>Money Manager</span>
          </p>
        </div>
        <ul className="cards">
          <MoneyDateils inc={income} />
        </ul>
        <div className="belowContainer">
          <div className="fCard">
            <h1 className="trance">Add Transaction</h1>
            <label htmlFor="Title" className="lab">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              id="Title"
              value={title}
              onChange={this.gettitle}
              className="inputcard"
            />
            <label htmlFor="Amount" className="lab">
              Amount
            </label>
            <input
              type="text"
              placeholder="Amount"
              id="Amount"
              value={amount}
              className="inputcard"
              onChange={this.getAmount}
            />
            <label htmlFor="TYPE" className="lab">
              TYPE
            </label>
            <select
              id="TYPE"
              className="form-control"
              onChange={this.gettype}
              value={type}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button className="sbmybyn" type="submit" onClick={this.addItem}>
              Add
            </button>
          </div>
          <div className="fcard">
            <h1 className="name">History</h1>
            <div className="historyCart">
              <p className="para">Title</p>
              <p className="para">Amount</p>
              <p className="para">Type</p>
            </div>
            <ul>
              {ItemList.map(each => (
                <TracsactionItem
                  info={each}
                  key={each.id}
                  delet={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
