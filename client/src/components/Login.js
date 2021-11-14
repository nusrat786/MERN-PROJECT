import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import signin from "../images/login.jpg";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login successfull");

      history.push("/");
    }
  };

  return (
    <div className="signin">
      <div className="signincontainer">
        <div className="signin-Image">
          <figure>
            <img src={signin} alt="signin  pic" />
          </figure>
          <NavLink to="/signup" className="signup-image-link">
            Create an account
          </NavLink>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Login</h2>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="email">
                <i className="far fa-envelope"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <i className="fas fa-unlock-alt"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />
            </div>

            <div className="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="form-submit btn-primary"
                value="Log In"
                onClick={loginUser}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
