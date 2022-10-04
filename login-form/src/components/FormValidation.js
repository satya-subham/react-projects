import react, { useState, useEffect } from "react";

export function FormValidation() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 4 || password.length > 8) {
      if (isAlreadyExist(userName, password)) {
        userLogin(userName, password);
      } else {
        signUp(userName, password);
      }
    } else {
      alert("Invalid Credential");
    }
  };

  const isAlreadyExist = (username, password) => {
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);

      let filteredUser = users.filter(
        (user) => user["userName"] === username && user["password"] === password
      );
      if (filteredUser.length > 0) {
        return true;
      }
      return false;
    }
  };

  const userLogin = (username, password) => {
    let loggedInUser = {
      userName: username,
    };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setLoggedInUser(loggedInUser);
  };

  const signUp = (username, password) => {
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
    } else {
      users = [];
    }

    users.push({
      userName: username,
      password: password,
    });
    users = JSON.stringify(users);
    localStorage.setItem("users", users);
  };

  const logOut = (username, password) => {
    setLoggedInUser(null);
    localStorage.setItem("loggedInUser", null);
    setUserName("");
    setPassword("");
  };
  return (
    <>
      {loggedInUser ? (
        <div>
          <h1> Welcome !!! {loggedInUser["userName"]}</h1>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <div className="form_container">
          <form>
            <h1>LOG IN</h1>
            <div className="input_container">
              <label htmlFor="username"> Username : </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="password_container">
              <label htmlFor="password"> Password : </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Log In
            </button>
          </form>
        </div>
      )}
    </>
  );
}
