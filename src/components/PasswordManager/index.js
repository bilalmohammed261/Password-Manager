import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

// import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
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

  searchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {username, website, password} = this.state
    const newPassword = {
      id: v4(),
      username,
      website,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
    }))

    this.setState({username: '', website: '', password: ''})
  }

  deletePasswordItem = id => {
    const {passwordsList} = this.state
    const updatedPasswordsList = passwordsList.filter(
      eachPassword => id !== eachPassword.id,
    )

    this.setState({
      passwordsList: updatedPasswordsList,
    })
  }

  getFilteredPasswordsList = () => {
    const {searchInput, passwordsList} = this.state
    const filteredPasswords = passwordsList.filter(passwordDetails =>
      passwordDetails.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return filteredPasswords
  }

  togglePasswordView = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  renderPasswordsList = () => {
    const {isChecked} = this.state
    const filteredPasswordsList = this.getFilteredPasswordsList()

    // console.log(passwordsList)

    if (filteredPasswordsList.length === 0) {
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
      <ul className="passwords-list">
        {filteredPasswordsList.map(passwordDetails => (
          <PasswordItem
            passwordDetails={passwordDetails}
            key={passwordDetails.id}
            deletePasswordItem={this.deletePasswordItem}
            isChecked={isChecked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      isChecked,
      searchInput,
    } = this.state
    console.log(isChecked)

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />

        <form onSubmit={this.addPassword}>
          <h1>Add Password</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
          />
          <input
            type="text"
            placeholder="Enter Website"
            onChange={this.getWebsite}
            value={website}
          />
          <br />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
          />
          <input
            type="text"
            placeholder="Enter Username"
            onChange={this.getUsername}
            value={username}
          />
          <br />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={this.getPassword}
            value={password}
          />
          <br />
          <button type="submit">Add</button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
        />
        <div className="passwords-container">
          <h2>Your Passwords</h2>
          <p>{passwordsList.length}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input
            type="search"
            placeholder="Search"
            onChange={this.searchInput}
            value={searchInput}
          />
          <input
            type="checkbox"
            id="checkbox"
            onClick={this.togglePasswordView}
          />
          <label htmlFor="checkbox">Show Passwords</label>
          <hr />
          {this.renderPasswordsList()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
