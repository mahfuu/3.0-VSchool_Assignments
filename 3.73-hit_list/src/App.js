import React from "react"

import Bounty from "./Bounty.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      bounties: []
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          bounties: data
        })
      })
      .catch(err => console.log("oops..." + err))
  }

  render(){
    const mappedBounties = this.state.bounties.map(bounty => <Bounty key={bounty.name} name={bounty.name} image={bounty.image} />)
    return(
      <div className="container">{this.state.bounties.length ? mappedBounties : "No Active Bounties"}</div>
    )
  }
}

export default App