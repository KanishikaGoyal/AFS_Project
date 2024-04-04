import "./login.css";
import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleForgotPassword = () => {
        // Implement your logic for handling forgot password functionality here
        console.log("Forgot Password clicked");
        // For example, you could display a modal or redirect to a password reset page
    };

    return (
        <div className="auth-form-container">
            <h2>Sign in Your Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <div className="additional-options">
                <div className="remember-me">
                <input type="checkbox" id="remember-me" name="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
                </div>
                <div className="forgot-password">
                <button type="button" onClick={handleForgotPassword}>Forget Password?</button>
                </div>
                </div>

                <button type="submit">Sign In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign Up</button>
        </div>
    )
}


// import "./login.css";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm">
//         <label>Email</label>
//         <input className="loginInput" type="text" placeholder="Enter your email..." />
//         <label>Password</label>
//         <input className="loginInput" type="password" placeholder="Enter your password..." />
//         <button className="loginButton">Login</button>
//       </form>
//         <button className="loginRegisterButton">
//        <Link className="link" to="/register">Register</Link>
//         </button>
//     </div>
//   );
// }