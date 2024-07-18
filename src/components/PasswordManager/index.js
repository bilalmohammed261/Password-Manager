import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import './index.css'

// import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    isChecked: false,
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

    this.setState({username: '', website: '', password: ''})
  }

  renderPasswordsList = () => {
    const {passwordsList} = this.state
    // console.log(passwordsList)

    if (passwordsList.length === 0) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <h2>No Passwords</h2>
        </div>
      )
    }
    return (
      <ul>
        {passwordsList.map(passwordDetails => (
          <PasswordItem
            passwordDetails={passwordDetails}
            key={passwordDetails.username}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {website, username, password, passwordsList, isChecked} = this.state
    console.log(isChecked)

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
        <div className="passwords-container">
          <h2>Your Passwords</h2>
          <p>{passwordsList.length}</p>
          <input type="search" placeholder="Search" />
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Show Passwords</label>
          <hr />
          {this.renderPasswordsList()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
