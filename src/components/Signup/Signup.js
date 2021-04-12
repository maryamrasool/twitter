import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/actions/authActions";

import "./Signup.css";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="signup-container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-5">Sign Up</h5>

          <div className="input-field">
            <input
              required
              placeHolder="First Name"
              type="text"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <input
              required
              placeHolder="Last Name"
              type="text"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>

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
            <button className="btn blue">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
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
  return {
    signup: (newUser) => dispatch(signup(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
