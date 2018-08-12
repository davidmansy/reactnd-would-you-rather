import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { user } = this.props;
    const questionsCreatedNumber = user.questions.length;
    const questionsAnsweredNumber = Object.keys(user.answers).length;
    const score = questionsCreatedNumber + questionsAnsweredNumber;

    return (
      <div>
        <p>Avatar</p>
        <p>{user.name}</p>
        <p>
          <span>Answered questions</span>
          <span>{questionsAnsweredNumber}</span>
        </p>
        <p>
          <span>Created questions</span>
          <span>{questionsCreatedNumber}</span>
        </p>
        <p>
          <span>Score</span>
          <span>{score}</span>
        </p>
        <p>=====================</p>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user
  };
}

export default connect(mapStateToProps)(User);
