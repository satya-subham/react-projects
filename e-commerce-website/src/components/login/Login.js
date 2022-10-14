import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="main_container">
        <div className="login_heading_div">
          <h1>LogIn</h1>
        </div>
        <div className="username_input_div">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username..."
          />
        </div>
        <div className="password_input_div">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          />
        </div>
        <div>
          <button id="login">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
