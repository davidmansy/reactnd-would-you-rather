import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';

class LoggedInUser extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <span>Hello {this.props.authedUser}</span>
            <span> | todo: avatar</span>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(LoggedInUser);
