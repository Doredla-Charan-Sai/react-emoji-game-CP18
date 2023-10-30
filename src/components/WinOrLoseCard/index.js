// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {text, description, finalScore, onClickPlayAgain} = props
  const onSelect = () => {
    onClickPlayAgain()
  }
  return (
    <div className="text-cont">
      <h1 className="text">{text}</h1>
      <p className="text description">{description}</p>
      <p className="text sore-got">{finalScore}/12</p>
      <button type="button" className="btn-play-again" onClick={onSelect}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
