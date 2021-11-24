import React from "react"
import Square from "./Square.js"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      colors: ["white", "white","white","white"]
    }
    this.djSmall = this.djSmall.bind(this)
    this.djParty = this.djParty.bind(this)
    this.djLeft = this.djLeft.bind(this)
    this.djRight = this.djRight.bind(this)
    this.djBigI = this.djBigI.bind(this)
    this.djBigII = this.djBigII.bind(this)
    this.djBigIII = this.djBigIII.bind(this)
    this.djBigIV = this.djBigIV.bind(this)
  }

  djSmall() {
    if(this.state.colors[0] === "white"){
      this.setState(prevState => {
        return {
          colors: ["black", "black", "black", "black"]
        }
      })
    } else {
      this.setState(prevState => {
        return {
          colors: ["white", "white","white","white"]
        }
      })
    }
  }

  djParty() {
    this.setState(prevState => {
      return {
        colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
      }
    })
  }

  djLeft() {
    this.setState(prevState => {
      return {
        colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
      }
    })
  }

  djRight() {
    this.setState(prevState => {
      return {
        colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
      }
    })
  }

  djBigI() {
    this.setState(prevState => {
      return {
        colors: ["firebrick", prevState.colors[1], prevState.colors[2], prevState.colors[3]]
      }
    })
  }

  djBigII() {
    this.setState(prevState => {
      return {
        colors: [prevState.colors[0], "firebrick", prevState.colors[2], prevState.colors[3]]
      }
    })
  }

  djBigIII() {
    this.setState(prevState => {
      return {
        colors: [prevState.colors[0], prevState.colors[1], "firebrick", prevState.colors[3]]
      }
    })
  }

  djBigIV() {
    this.setState(prevState => {
      return {
        colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "firebrick"]
      }
    })
  }

  render(){
    const squares = this.state.colors.map(item => <Square color={item}/>)
    
    return (
      <div>
        {squares}
        <button onClick={this.djSmall}>SMALL BUTTON</button>
        <button onClick={this.djParty}>PARTY BUTTON</button>
        <button onClick={this.djLeft}>PRO LEFT</button>
        <button onClick={this.djRight}>PRO RIGHT</button>
        <button onClick={this.djBigI}>BIG BUTTON I</button>
        <button onClick={this.djBigII}>BIG BUTTON II</button>
        <button onClick={this.djBigIII}>BIG BUTTON III</button>
        <button onClick={this.djBigIV}>BIG BUTTON IV</button>
      </div>
    )
  }
}

export default App