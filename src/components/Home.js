import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.props.authedUser}</p>
        <LogoutButton />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Home);
