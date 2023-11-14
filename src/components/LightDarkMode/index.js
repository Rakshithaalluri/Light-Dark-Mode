// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isBgColorBlack: true}

  onChangeMode = () => {
    this.setState(prevState => ({isBgColorBlack: !prevState.isBgColorBlack}))
  }

  render() {
    const {isBgColorBlack} = this.state
    const modeClass = isBgColorBlack ? 'dark-mode' : 'light-mode'
    const buttonText = isBgColorBlack ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`changing-container ${modeClass}`}>
          <h1 className="heading"> Click To Change Mode </h1>
          <button className="button" type="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
