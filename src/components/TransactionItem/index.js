// Write your code here
import {Component} from 'react'
import './index.css'

class TracsactionItem extends Component {
  render() {
    const {info, delet} = this.props
    const {title, amount, type, imgUrl, id} = info
    const deleteItem = () => {
      delet(id)
    }

    return (
      <li className="Item">
        <p className="para">{title}</p>
        <p className="para">Rs {amount}</p>
        <p className="para">{type}</p>
        <button
          data-testid="delete"
          onClick={deleteItem}
          type="button"
          className="but"
        >
          <img src={imgUrl} alt="delete" className="deleteImg" />
        </button>
      </li>
    )
  }
}
export default TracsactionItem
