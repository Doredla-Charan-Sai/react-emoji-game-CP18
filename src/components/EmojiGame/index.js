/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiNames: [],
    playing: true,
  }

  onIncreaseScore = uniqueId => {
    const {emojisList} = this.props
    const getEmojiName = emojisList.find(item => item.id === uniqueId)
    const {clickedEmojiNames} = this.state

    if (!clickedEmojiNames.includes(getEmojiName.emojiName)) {
      if (clickedEmojiNames.length !== emojisList.length - 1) {
        this.setState(prevState => ({
          clickedEmojiNames: [
            ...prevState.clickedEmojiNames,
            getEmojiName.emojiName,
          ],
          score: prevState.score + 1,
          topScore:
            prevState.score > prevState.topScore
              ? prevState.score
              : prevState.topScore,
        }))
      } else {
        console.log(clickedEmojiNames.length)
        this.setState(prevState => ({
          playing: !prevState.playing,
          score: prevState.score + 1,
          topScore:
            prevState.score > prevState.topScore
              ? prevState.score
              : prevState.topScore,
        }))
      }
    } else {
      this.setState(prevState => ({playing: !prevState.playing}))
    }
  }

  onPlayAgain = () => {
    this.setState(prevState => ({
      score: 0,
      topScore: prevState.score,
      playing: true,
      clickedEmojiNames: [],
    }))
  }

  render() {
    const {score, topScore, playing} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    const {clickedEmojiNames} = this.state

    return (
      <div className="bg-cont">
        {playing === false ? (
          <NavBar />
        ) : (
          <NavBar scored={score} topScored={topScore} />
        )}
        <div className="score-page">
          {playing === true && (
            <div className="cont">
              <ul className="list-cont">
                {shuffledEmojisList().map(eachItem => (
                  <EmojiCard
                    emojiCardDetails={eachItem}
                    key={eachItem.id}
                    onSelect={this.onIncreaseScore}
                  />
                ))}
              </ul>
            </div>
          )}

          {playing === false &&
            clickedEmojiNames.length === emojisList.length - 1 && (
              <div className="score-card">
                <WinOrLoseCard
                  text="You Won"
                  finalScore={score}
                  description="Best Score"
                  onClickPlayAgain={this.onPlayAgain}
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                  alt="win or lose"
                  className="side-img"
                />
              </div>
            )}
          {playing === false &&
            clickedEmojiNames.length !== emojisList.length - 1 && (
              <div className="score-card">
                <WinOrLoseCard
                  text="You Lose"
                  finalScore={score}
                  description="Score"
                  onClickPlayAgain={this.onPlayAgain}
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                  alt="win or lose"
                  className="side-img"
                />
              </div>
            )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
