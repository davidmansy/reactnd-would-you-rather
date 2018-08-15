import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { setAuthedUser } from '../../actions/authedUser';
import reduxImage from '../../images/redux-150.png';

class LoginForm extends Component {
  state = {
    redirectToReferrer: false,
    userId: '',
    submitButtonIsDisabled: true
  };

  handleChange = e => {
    const userId = e.target.value;
    this.setState(() => ({
      userId,
      submitButtonIsDisabled: userId === '' ? true : false
    }));
  };

  signIn = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { userId } = this.state;
    dispatch(setAuthedUser(userId));
    this.setState(() => ({
      redirectToReferrer: true
    }));
  };

  render() {
    const { redirectToReferrer, userId, submitButtonIsDisabled } = this.state;
    const { users } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login__content">
        <div className="login__content__image-container">
          <img
            className="login__content__image"
            src={reduxImage}
            alt="react logo"
          />
        </div>
        <p className="login__content__title">Sign In</p>
        <form onSubmit={this.signIn} className="login__content__form">
          {/* TODO: Implement a custom dropdown */}
          <select
            value={userId}
            onChange={this.handleChange}
            className="login__content_user"
          >
            <option key={null} value={''}>
              Please select a user
            </option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button
            disabled={submitButtonIsDisabled}
            className={`login__content__submit ${
              submitButtonIsDisabled ? 'login__content__submit--disabled' : ''
            }`}
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users).sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  };
}

export default withRouter(connect(mapStateToProps)(LoginForm));
