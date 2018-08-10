import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';

class LoggedInUser extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <div>
        <ul>
          <li>
            <span>Hello {loggedInUser.name}</span>
            <span> | avatar: {loggedInUser.avatar}</span>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loggedInUser: users[authedUser]
  };
}

export default connect(mapStateToProps)(LoggedInUser);
