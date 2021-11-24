import React from "react"
import axios from "axios"

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      colorList: []
    }
  }

  componentDidMount() {
    axios.get("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
      .then(res => {
        this.setState({
          colorList: res.data.colors
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    console.log(this.state.colorList)
  }

  render() {
    const mappedColors = this.state.colorList.map(item => <div style={{height: "80px", width: "80px", backgroundColor: `#${item.hex}`, border: "1px solid black"}}></div>)
    return(
      <div>
        {mappedColors}
      </div>
    )
  }
}

export default App