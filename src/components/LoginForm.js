import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class LoginForm extends Component {
  state = {
    redirectToReferrer: false,
    userId: ''
  };

  handleChange = e => {
    const userId = e.target.value;
    this.setState(() => ({
      userId
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
    const { redirectToReferrer, userId } = this.state;
    const { users } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <form onSubmit={this.signIn}>
        <select value={userId} onChange={this.handleChange}>
          <option key={null} value={''}>
            Please select a user
          </option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <input type="submit" value="Sign In" />
      </form>
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
