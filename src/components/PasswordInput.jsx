import './PasswordInput.css'

const PasswordInput = () => {
  return (
    <div className="password-input-container">
        <label id="password-input">Password</label> <br></br>
        <input id="password-input" type="password"/>
    </div>
  )
}

export default PasswordInput