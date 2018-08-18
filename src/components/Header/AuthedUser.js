import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';

const X_SMALL_SIZE = '&size=30';

const AuthedUser = ({ user }) => {
  const xSmallAvatarURl = user ? `${user.avatar}${X_SMALL_SIZE}` : null;
  return (
    user && (
      <Fragment>
        <div className="authedUser">
          <span className="authedUser__name">{`Hello, ${user.name}`}</span>
          <span>
            <img
              className="authedUser__avatar--small"
              src={xSmallAvatarURl}
              alt="User avatar"
            />
          </span>
        </div>
        <Logout />
      </Fragment>
    )
  );
};

function mapStateToProps({ authedUser, users }) {
  const user = authedUser ? users[authedUser] : null;
  return {
    user
  };
}

export default connect(mapStateToProps)(AuthedUser);
