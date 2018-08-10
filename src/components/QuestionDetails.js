import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';

class QuestionDetails extends Component {
  render() {
    const { question, answered, authorName } = this.props;
    return (
      <div>
        {!question ? (
          <Redirect to="/notfound" />
        ) : (
          <div>
            <Header />
            <h1>Question Details</h1>
            {answered ? (
              <div>
                <span>Answered question details</span>
                <div>
                  {authorName} asks {question.optionOne.text}
                </div>
              </div>
            ) : (
              <div>
                <span>Unanswered question details</span>
                <div>
                  {authorName} asks {question.optionOne.text}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
  const question = questions[match.params.id];
  const answered = question
    ? question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    : null;

  return {
    question: question ? question : null,
    authorName: question ? users[question.author].name : null,
    answered
  };
}

export default connect(mapStateToProps)(QuestionDetails);
