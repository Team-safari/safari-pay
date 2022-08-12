import React from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

function Signup() {
  return (
    <div className="signup_page">
      <div className="container">
        <div className="left">
          <img src="./signUPvector.svg" alt="" />
        </div>
        <div className="right">
          <h2>
            Safari<span>Pay</span>
          </h2>
          {/* <div className="step">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div> */}
          <h1>Personal Information</h1>
          <p>Kindly fill in your details to get started</p>
          <form>
            <label htmlFor="firstname">
              First Name
              <input
                type="text"
                id="firstname"
                placeholder="Enter your first name here"
              />
            </label>
            <label htmlFor="lastname">
              Last Name
              <input
                type="text"
                id="lastname"
                placeholder="Enter your last name/surname here"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                placeholder="at least 8 characters"
              />
            </label>
            <label htmlFor="confirm">
              Confirm Password
              <input
                type="password"
                id="confirm"
                placeholder="Re-type your password"
              />
            </label>
            <label htmlFor="gender">
              Gender
              <select id="gender">
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label htmlFor="number">
              Phone number
              <input
                type="number"
                id="number"
                placeholder="Enter your phone number"
              />
            </label>
            <div className="next">
              <button onClick={(e) => e.preventDefault()}>Next</button>
              <p>
                Already have an account? <Link to="#"> Log In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
