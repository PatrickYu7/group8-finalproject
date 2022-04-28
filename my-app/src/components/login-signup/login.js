import React, { useState } from "react";
import classes from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const info = {
      username: username,
      password: password,
    };
    console.log(info);

    axios.post("http://localhost:8080/user.route/login", info).then((res) => {
      const response = res.data;
      if (response.token) {
        localStorage.setItem("username", username);
        routeChange("/home");
      }
    });
  };

  return (
    <div className={classes.home}>
      <div className={classes.top}>
        <div className={classes.topImage}></div>
        <div className={classes.text}>
          <h1>Rate Berkeley Classes</h1>
        </div>
        <div className={classes.formCenter}>
          <form className={classes.formSize} onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <div className="mb-3">
              <label>Username</label>
              <input
                type="username"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <Link to="/sign-up">
              <p className={classes.signup}>Create New Account</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
