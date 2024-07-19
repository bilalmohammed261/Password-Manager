const PasswordItem = props => {
  const {passwordDetails, deletePasswordItem, isChecked} = props
  const {website, username, password, id} = passwordDetails

  const clickDeleteIcon = () => {
    deletePasswordItem(id)
  }
  return (
    <li>
      <p>{website}</p>
      <p>{username}</p>

      {!isChecked ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      ) : (
        <p>{password}</p>
      )}
      <button type="button" onClick={clickDeleteIcon} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
