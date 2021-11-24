import React from "react"

import Badge from "./Badge.js"

class App extends React.Component {
  state = {
    badgeForm: {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      bio: "",
    },
    badgeList: []
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.setState(prevState => ({
      badgeList: [...prevState.badgeList, prevState.badgeForm],
      badgeForm: {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        bio: "",
      }
    }))
    
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState(prevState => ({
      badgeForm: {...prevState.badgeForm, [name]: value}
    }))
  }
  
  render() {
    const badges = this.state.badgeList.map(badge => <Badge data={badge} />)
    return(
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <input
          className="form--first-name"
          name="firstName"
          placeholder="First Name"
          value={this.state.badgeForm.firstName}
          onChange={this.handleChange}
          minlength="3"
          required
          />
          <input
          className="form--last-name"
          name="lastName"
          placeholder="Last Name"
          value={this.state.badgeForm.lastName}
          onChange={this.handleChange}
          minlength="3"
          required
          />
          <br/>
          <input
          className="form--email"
          name="email"
          placeholder="Email"
          value={this.state.badgeForm.email}
          onChange={this.handleChange}
          minlength="3"
          required
          />
          <input
          className="form--place"
          name="placeOfBirth"
          placeholder="Place of Birth"
          value={this.state.badgeForm.placeOfBirth}
          onChange={this.handleChange}
          minlength="3"
          required
          />
          <br/>
          <input
          className="form--phone"
          name="phone"
          placeholder="Phone"
          type="number"
          value={this.state.badgeForm.phone}
          onChange={this.handleChange}
          minlength="10"
          maxlength="10"
          required
          />
          <input
          className="form--food"
          name="favoriteFood"
          placeholder="Favorite Food"
          value={this.state.badgeForm.favoriteFood}
          onChange={this.handleChange}
          required
          />
          <br/>
          <textarea
          className="form--bio"
          name="bio"
          placeholder="Tell us about yourself"
          value={this.state.badgeForm.bio}
          onChange={this.handleChange}
          />
          <button className="form--button" type="submit">Submit</button>
        </form>
        {badges}
      </div>
    )
  }
}

export default App