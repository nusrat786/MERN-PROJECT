import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import login from "../images/login.jpg";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration successfull");
      console.log(" Registration successfull");
      history.push("/login");
    }
  };

  return (
    <div className="signup">
      <div className="signupcontainer">
        <div className="signup-form">
          <h2 className="form-title">Sign Up</h2>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="far fa-envelope"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <i className="fas fa-mobile-alt"></i>
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Enter your Phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="work">
                <i className="fas fa-briefcase"></i>
              </label>
              <input
                type="text"
                name="work"
                id="work"
                autoComplete="off"
                value={user.work}
                onChange={handleInputs}
                placeholder="Enter your Profession"
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
                value={user.password}
                onChange={handleInputs}
                placeholder="Enter your Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">
                <i className="fas fa-unlock-alt"></i>
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm your Password"
              />
            </div>
            <div className="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-submit btn-primary"
                value="Register"
                onClick={PostData}
              />
            </div>
          </form>
        </div>
        <div className="signup-Image">
          <figure>
            <img src={login} alt="registration pic" />
          </figure>
          <NavLink to="/login" className="signup-image-link">
            I am already registered
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
