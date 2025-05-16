import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FullNameInput from "../components/FullNameInput"
import FilledButton from "../components/FilledButton"
import { MdOutlineAccountCircle } from "react-icons/md"

import signupImage from './../assets/images/arranging-files.png'
import './SignupScreen.css'

const { VITE_APP_BACKEND_API_BASE_URL } = import.meta.env;

const SignupScreen = () => {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const registerHandler = async () => {
    try {
      const data = {
        fullName,
        email,
        password
      }

      const response = await axios.post(`${VITE_APP_BACKEND_API_BASE_URL}/auth/signup`, data);

      const { success, message } = response.data;

      if (!success) {
        alert(message);
      } else {
        alert("Signup successful");
        navigate("/auth/signin");
      }

    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div className="signup-screen"> 
        <div className="signup-form-container">
            <div>
                <h1>Welcome to Shortify!</h1>
                <h2>Register and start sharing</h2>
                <p>Already having account? <Link to="/auth/signin">Signin</Link></p>
            </div>
            <FullNameInput setFullName={setFullName} />
            <EmailInput setEmail={setEmail} />
            <PasswordInput setPassword={setPassword} />
            <FilledButton onClick={registerHandler} size="large"><MdOutlineAccountCircle/> Register</FilledButton>
            <div className="tnc-container">
                <p>By registering, you agree to Shortify's <Link to="/terms-and-conditions">Terms of Service</Link>, <Link to="/privacy-policy">Privacy Policy</Link>, and Acceptable Use Policy.</p>
            </div>
        </div>
        <div>
            <img src={signupImage} alt="Signup" />
        </div>
    </div>
  )
}

export default SignupScreen;
