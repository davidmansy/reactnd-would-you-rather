import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAuthedUser } from '../../actions/authedUser';

class Logout extends Component {
  handleClick = e => {
    e.preventDefault();
    const { history, dispatch } = this.props;
    dispatch(setAuthedUser(null));
    history.push('/login');
  };

  render() {
    return (
      <nav className="nav">
        <ul className="nav__row">
          <li className="nav__list">
            <a className="nav__link" href="/login" onClick={this.handleClick}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(connect()(Logout));
