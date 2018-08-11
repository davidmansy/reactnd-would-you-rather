import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnansweredQuestion extends Component {
  state = {
    answer: 'optionOne'
  };

  handleOptionChange = e => {
    const answer = e.target.value;
    this.setState(() => ({
      answer
    }));
  };

  render() {
    const { authorName, question, handleSubmitAnswer } = this.props;
    const { answer } = this.state;

    return (
      <div>
        <span>Unanswered question details</span>
        <div>
          <p>{`${authorName} asks`}</p>
          <p>Would You Rather...</p>
          <form onSubmit={e => handleSubmitAnswer(e, answer)}>
            <div>
              <label>
                <input
                  type="radio"
                  value="optionOne"
                  checked={answer === 'optionOne'}
                  onChange={this.handleOptionChange}
                />
                {question.optionOne.text}
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="optionTwo"
                  checked={answer === 'optionTwo'}
                  onChange={this.handleOptionChange}
                />
                {question.optionTwo.text}
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(
  { questions, users, authedUser },
  { id, handleSubmitAnswer }
) {
  const question = questions[id];

  return {
    question,
    authorName: users[question.author].name,
    authedUser,
    handleSubmitAnswer
  };
}

export default connect(mapStateToProps)(UnansweredQuestion);
