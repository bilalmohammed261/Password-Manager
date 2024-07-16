import {Component} from 'react'

class PasswordManager extends Component {
  state = {
    passwordsList: [{website: 'google', username: 'bilal', password: 'pwd'}],
    website: '',
    username: '',
    password: '',
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getWebsite = event => {
    this.setState({website: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {username, website, password} = this.state
    const newPassword = {
      username,
      website,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
    }))
  }

  render() {
    const {website, username, password, passwordsList} = this.state
    console.log(passwordsList)

    return (
      <div className="app-container">
        <form onSubmit={this.addPassword}>
          <h1>Add Password</h1>
          <input
            type="text"
            placeholder="Enter Website"
            onChange={this.getWebsite}
            value={website}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Username"
            onChange={this.getUsername}
            value={username}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={this.getPassword}
            value={password}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default PasswordManager
