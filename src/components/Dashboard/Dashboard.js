import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PostTweet from "./PostTweet";
import Tweets from "./Tweets";
import Users from "./Users";
import { logout } from "../../store/actions/authActions";

import "./Dashboard.css";

const Dashboard = (props) => {
  const { auth, profile } = props;
  if (!auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <div className="dashboard-container">
      <div className="name-and-logout">
        <div className="welcome-name">
          <p>Welcome, </p>
          <p className="name">
            {" " + profile.firstName + " " + profile.lastName}{" "}
          </p>
        </div>
        <Link to="/">
          <button class="logout-button" onClick={props.logout}>
            Log Out
          </button>
        </Link>
      </div>

      <div className="tweets-and-users">
        <div className="tweets">
          <PostTweet />
          <Tweets />
        </div>
        <div className="users">
          <Users />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
