import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import { handleAnswerQuestion } from '../../actions/questions';

class QuestionDetails extends Component {
  handleSubmitAnswer = (e, answer) => {
    const { dispatch, question, authedUser } = this.props;
    e.preventDefault();
    dispatch(
      handleAnswerQuestion({
        qid: question.id,
        authedUser,
        answer
      })
    );
  };

  render() {
    const { question, answered } = this.props;

    return (
      <Fragment>
        {!question ? (
          <Redirect to="/notfound" />
        ) : (
          <Fragment>
            {answered ? (
              <AnsweredQuestion id={question.id} />
            ) : (
              <UnansweredQuestion
                id={question.id}
                handleSubmitAnswer={this.handleSubmitAnswer}
              />
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authedUser }, { match }) {
  const question = questions[match.params.id];
  const answered = question
    ? question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    : null;

  return {
    question: question ? question : null,
    authedUser,
    answered
  };
}

export default connect(mapStateToProps)(QuestionDetails);
