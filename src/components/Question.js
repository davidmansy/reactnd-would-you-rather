import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {
  handleViewPoll = e => {
    const { history, question } = this.props;
    e.preventDefault();
    history.push(`/question/${question.id}`);
  };

  render() {
    const { question, authorName } = this.props;
    return (
      <div>
        <p>{authorName} asks</p>
        <p>avatar</p>
        <p>Would you rather</p>
        <p>{question.optionOne.text}</p>
        <button onClick={this.handleViewPoll}>View Poll</button>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  return {
    question,
    authorName: users[question.author].name
  };
}

export default withRouter(connect(mapStateToProps)(Question));
