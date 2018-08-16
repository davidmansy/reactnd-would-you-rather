import React, { Component } from 'react';
import { connect } from 'react-redux';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';
const LARGE_SIZE = '&size=130';
const VOTE_ZERO_COLOR = 'lightgrey';
const VOTE_GREATER_ZERO_COLOR = '#4bc197';

class AnsweredQuestion extends Component {
  render() {
    const { author, question, answer } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentVotes = Number.parseInt(
      (optionOneVotes / totalVotes) * 100,
      10
    );
    const optionTwoPercentVotes = Number.parseInt(
      (optionTwoVotes / totalVotes) * 100,
      10
    );
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
              Results
            </p>
            <div
              className={`questions__item__content__answered__container ${
                answer === OPTION_ONE
                  ? 'questions__item__content__answered__container--selected'
                  : ''
              }`}
            >
              <p className="questions__item__content__answered__intro">{`Would you rather ${
                question.optionOne.text
              }`}</p>
              <div
                style={{
                  width: `${optionOnePercentVotes}%`,
                  backgroundColor:
                    optionOnePercentVotes === 0
                      ? VOTE_ZERO_COLOR
                      : VOTE_GREATER_ZERO_COLOR
                }}
                className="questions__item__content__answered__progress-bar"
              >
                {`${optionOnePercentVotes}%`}
              </div>
              <p className="questions__item__content__answered__votes">{`${optionOneVotes} out of ${totalVotes} votes`}</p>
            </div>
            <div
              className={`questions__item__content__answered__container ${
                answer === OPTION_TWO
                  ? 'questions__item__content__answered__container--selected'
                  : ''
              }`}
            >
              <p className="questions__item__content__answered__intro">{`Would you rather ${
                question.optionTwo.text
              }`}</p>
              <div
                style={{
                  width: `${optionTwoPercentVotes}%`,
                  backgroundColor:
                    optionTwoPercentVotes === 0
                      ? VOTE_ZERO_COLOR
                      : VOTE_GREATER_ZERO_COLOR
                }}
                className="questions__item__content__answered__progress-bar"
              >
                {`${optionTwoPercentVotes}%`}
              </div>
              <p className="questions__item__content__answered__votes">{`${optionTwoVotes} out of ${totalVotes} votes`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const answer = question.optionOne.votes.includes(authedUser)
    ? 'optionOne'
    : 'optionTwo';

  return {
    question,
    author: users[question.author],
    answer
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
