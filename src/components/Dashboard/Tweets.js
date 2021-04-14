import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Tweets = (props) => {
  const { tweets, profile } = props;
  return (
    <div className="tweets-container">
      {profile.following
        ? tweets
          ? tweets
              .map((obj) => {
                if (
                  profile.following.includes(obj.authorEmail) ||
                  obj.authorEmail == profile.email
                ) {
                  let date = obj.timeStamp;
                  date = date.substring(0, 24);
                  return (
                    <div class="card">
                      <div class="card-content black-text">
                        <p>{obj.content}</p>
                      </div>
                      <div class="card-action gray-text">
                        <p>
                          {"By " +
                            obj.authorFName +
                            " " +
                            obj.authorLName +
                            " at " +
                            date}
                        </p>
                      </div>
                    </div>
                  );
                }
              })
              .reverse()
          : "No Tweets"
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tweets: state.firestore.ordered.tweets,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["users", "tweets"])
)(Tweets);
