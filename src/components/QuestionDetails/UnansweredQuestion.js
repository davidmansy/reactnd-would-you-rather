import React, { Component } from 'react';
import { connect } from 'react-redux';

const LARGE_SIZE = '&size=130';

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
    const { author, question, handleSubmitAnswer } = this.props;
    const { answer } = this.state;
    const largeAvatarURl = `${author.avatar}${LARGE_SIZE}`;

    return (
      <div id="question-details" className="questions__item">
        <div className="questions__item__user">{author.name} asks:</div>
        <div className="questions__item__content">
          <div className="questions__item__content__avatar__container">
            <img
              className="questions__item__content__avatar"
              src={largeAvatarURl}
              alt="User avatar"
            />
          </div>
          <div className="questions__item__content__description">
            <p className="questions__item__content__description__intro">
              Would You Rather...
            </p>
            <form onSubmit={e => handleSubmitAnswer(e, answer)}>
              <div className="questions__item__content__answers">
                <div className="questions__item__content__answer">
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
                <div className="questions__item__content__answer">
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
              </div>
              <button type="submit" className="button__submit">
                Submit
              </button>
            </form>
          </div>
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
    author: users[question.author],
    authedUser,
    handleSubmitAnswer
  };
}

export default connect(mapStateToProps)(UnansweredQuestion);
