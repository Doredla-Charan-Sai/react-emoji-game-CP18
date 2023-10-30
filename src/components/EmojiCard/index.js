// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, onSelect} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails
  const onIncrement = () => {
    onSelect(id)
  }
  return (
    <li className="list-item">
      <button className="list-item-btn" type="button" onClick={onIncrement}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
