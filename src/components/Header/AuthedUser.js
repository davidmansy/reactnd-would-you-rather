import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';

const SMALL_SIZE = '&size=30';

class AuthedUser extends Component {
  render() {
    const { user } = this.props;
    const smallAvatarURl = user ? `${user.avatar}${SMALL_SIZE}` : null;
    return (
      user && (
        <Fragment>
          <div className="authed-user">
            <span className="authed-user__name">{`Hello, ${user.name}`}</span>
            <span>
              <img
                className="authed-user__avatar--small"
                src={smallAvatarURl}
                alt="User avatar"
              />
            </span>
          </div>
          <Logout />
        </Fragment>
      )
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = authedUser ? users[authedUser] : null;
  return {
    user
  };
}

export default connect(mapStateToProps)(AuthedUser);
