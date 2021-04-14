import React, { Component } from "react";
import { connect } from "react-redux";
import { postTweet } from "../../store/actions/tweetsActions";

class PostTweet extends Component {
  state = {
    content: "",
    timeStamp: "",
    authorFName: "",
    authorLName: "",
    authorEmail: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    let date = new Date();
    this.setState({
      timeStamp: date.toString(),
      authorFName: this.props.profile.firstName,
      authorLName: this.props.profile.lastName,
      authorEmail: this.props.profile.email,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("content").value = "";
    this.props.postTweet(this.state);
  };

  render() {
    return (
      <div className="post-tweets-container">
        <form className="white post-tweets" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-5">Tweets</h5>
          <div className="post-tweets-container">
            <div className="input-field post-tweets-container">
              <textarea
                required
                id="content"
                rows="2"
                cols="50"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <button className="post-button">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postTweet: (tweet) => dispatch(postTweet(tweet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostTweet);
