// Write your code here.
import './index.css'

const NavBar = props => {
  const {scored, topScored} = props
  return (
    <nav className="nav-bar-cont">
      <div className="logo-cont">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {scored !== undefined && topScored !== undefined && (
        <div className="scores-cont">
          <p className="score-para">Score: {scored}</p>
          <p className="score-para">Top Score: {topScored}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
