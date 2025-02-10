import './EmailInput.css'

const EmailInput = () => {
  return (
    <div className="email-input-container">
        <label for="email-input">Email</label> <br></br>
        <input id="email-input" type="email"/>
    </div>
  )
}

export default EmailInput