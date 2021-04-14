import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/actions/authActions";
import { loginWithGoogle } from "../../store/actions/authActions";

import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleGoogleLogin = () => {
    console.log("Button Clic");
    this.props.loginWithGoogle();
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="login-container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-5">Log In</h5>

          <div className="input-field">
            <input
              required
              placeHolder="Email"
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <input
              required
              placeHolder="Password"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button className="btn blue">Log In</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
        <button className="btn orange" onClick={this.handleGoogleLogin}>
          Log In With Google
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Dispatching");
  return {
    login: (creds) => dispatch(login(creds)),
    loginWithGoogle: () => dispatch(loginWithGoogle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
