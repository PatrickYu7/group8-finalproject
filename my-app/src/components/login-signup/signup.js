import React, { useState } from "react";
import classes from "./login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    const info = {
      username: username,
      email: email,
      password: password,
    };

    axios.post("http://localhost:8080/signup", info).then((res) => {
      console.log(res.data);
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
            <h3>Sign Up</h3>

            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                Sign Up
              </button>
            </div>
            <Link to="/sign-in">
              <p className={classes.signup}>Already Registered? Sign in</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
