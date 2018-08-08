import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class LogoutButton extends Component {
  handleClick = e => {
    const { history, dispatch } = this.props;
    dispatch(setAuthedUser(null));
    history.push('/login');
  };

  render() {
    return <button onClick={this.handleClick}>Logout</button>;
  }
}

export default withRouter(connect()(LogoutButton));
