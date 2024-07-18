const PasswordItem = props => {
  const {passwordDetails} = props
  const {website, username, password} = passwordDetails
  return (
    <li>
      <p>{website}</p>
      <p>{username}</p>
      <p>{password}</p>
    </li>
  )
}

export default PasswordItem
