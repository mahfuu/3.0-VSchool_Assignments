import React from "react"
import Dicebox from "./Dicebox"

class App extends React.Component {
  constructor(){
      super()
      this.state = {
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
          num5: 0
      }
      this.rollDice = this.rollDice.bind(this)
  }

  rollDice(){
    const randomNumber = () => Math.floor(Math.random() * 6)+1
    this.setState({
      num1: randomNumber(),
      num2: randomNumber(),
      num3: randomNumber(),
      num4: randomNumber(),
      num5: randomNumber()
    })
  }

  render(){
    return(
        <div>
          <Dicebox number={this.state}/>
          <button onClick={this.rollDice}>Roll Dice!</button>
        </div>
    )
  }
}

export default App