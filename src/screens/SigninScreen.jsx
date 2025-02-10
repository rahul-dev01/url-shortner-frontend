import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FilledButton from "../components/FilledButton"
import { FaSignInAlt } from "react-icons/fa";

import { Link } from "react-router-dom"

import './SigninScreen.css'

import SignInImage from './../assets/images/arranging-files.png'

const SigninScreen = () => {
  return (
    <div id="signin-screen"> 
        {/* Form */}
        <div id="form-container">
            <div>
                <h1>Welcome to Shortify!</h1>
                <h2>Login and start sharing</h2>
                <p>Don't have any account? {<Link to="/auth/signup">Register</Link>}</p>
            </div>
            <EmailInput/>
            <PasswordInput/>
            <div>
                <Link to="/auth/forgot-password"><span>Forgot your password?</span></Link>
            </div>
            <FilledButton size="large"><FaSignInAlt/> Login</FilledButton>
            <div>
                <p>By logging in with an account, you agree to Shortify's {<Link to="/terms-and-conditions">Terms of Service</Link>}, {<Link to="/privacy-policy">Privacy Policy</Link>} and Acceptable Use Policy.</p>
            </div>
        </div>
        {/* Image */}
        <div>
            <img src={SignInImage} alt="Signin Image"/>
        </div>
    </div>
  )
}

export default SigninScreen