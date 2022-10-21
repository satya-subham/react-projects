import React, { useState } from "react";
import './SignUp.css'

export function SignUp() {
  const [signFirstName, setSignFirstName] = useState("");
  const [signLastName, setSignLastName] = useState('');
  const [signEmail, setSignEmail] = useState('');
  const [signPassword, setSignPassword] = useState("");

  const handleSignup = (username, password) =>{
    // let users = localStorage.getItem('users');
    // if(users){
    //   users = JSON.parse(users)
    // }else{
    //   users = []
    // }

    let users = []
    users.push({
      'signEmail': username,
      'signPassword': password,
    })
    localStorage.setItem('users', users)
  }

  return (
    <>
      <div className="main_signup_container">
        <div className="signup_heading_div">
        <h1>SignUp</h1>
        </div>
        <div className="username_input_div">
          <input
            type="text"
            id="signup_firstname"
            value={signFirstName}
            onChange={(e) => setSignFirstName(e.target.value)}
            placeholder="First Name..."
          />
        </div>
        <div className="username_input_div">
          <input
            type="text"
            id="signup_lastname"
            value={signLastName}
            onChange={(e) => setSignLastName(e.target.value)}
            placeholder="Last Name..."
          />
        </div>
        <div className="username_input_div">
          <input
            type="text"
            id="signup_email"
            value={signEmail}
            onChange={(e) => setSignEmail(e.target.value)}
            placeholder="example@gmail.com..."
          />
        </div>
        <div className="password_input_div">
          <input
            type="password"
            id="signup_password"
            value={signPassword}
            onChange={(e) => setSignPassword(e.target.value)}
            placeholder="Password..."
          />
        </div>
        <div className="signup_button_div">
          <button id="signup" onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </>
  );
}