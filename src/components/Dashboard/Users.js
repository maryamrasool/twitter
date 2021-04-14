import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { follow, unFollow } from "../../store/actions/userActions";
import personAvatar from "../../assets/images/person-avatar.png";

const handleFollow = (e, props) => {
  let { auth, profile } = props;
  profile.following = [...profile.following, e.target.id];
  props.follow(auth, profile);
};

const handleUnfollow = (e, props) => {
  let { auth, profile } = props;
  let following = [];
  profile.following.map((obj) => {
    if (obj !== e.target.id) {
      following.push(obj);
    }
  });
  profile.following = following;
  props.unFollow(auth, profile);
};

const Users = (props) => {
  let { users, profile } = props;
  return (
    <div className="users-container">
      <h5 className="grey-text text-darken-5">Users</h5>
      {users ? (
        users.length > 1 ? (
          <ul class="collection">
            {users.map((user) => {
              if (user.email !== profile.email && profile.following) {
                return (
                  <li class="collection-item avatar">
                    <img src={personAvatar} alt="" class="circle" />
                    <div className="name-and-follow">
                      <p>{user.firstName + " " + user.lastName}</p>
                      {profile.following.includes(user.email) ? (
                        <button
                          id={user.email}
                          className="unfollow-button"
                          onClick={(e) => handleUnfollow(e, props)}
                        >
                          Unfollow
                        </button>
                      ) : (
                        <button
                          id={user.email}
                          className="follow-button"
                          onClick={(e) => handleFollow(e, props)}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        ) : (
          "No Users"
        )
      ) : (
        "No Users"
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (auth, profile) => dispatch(follow(auth, profile)),
    unFollow: (auth, profile) => dispatch(unFollow(auth, profile)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "users" }])
)(Users);
