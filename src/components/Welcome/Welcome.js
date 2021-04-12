import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import twitterLogo from "../../assets/images/twitter-logo.png";
import "./Welcome.css";

const Welcome = (props) => {
  const { auth } = props;
  if (auth.uid) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="welcome-container">
      <img id="logoImage" src={twitterLogo} alt="Twitter Logo"></img>
      <span id="happeningNow">Happening Now</span>
      <span id="joinTwitterToday">Join Twitter today.</span>
      <Link to="/signup">
        <button class="signup-button">Sign Up</button>
      </Link>
      <Link to="/login">
        <button class="login-button">Log In</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(Welcome);
