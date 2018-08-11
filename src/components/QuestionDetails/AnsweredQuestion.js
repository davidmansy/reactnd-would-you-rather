import React, { Component } from 'react';
import { connect } from 'react-redux';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

class AnsweredQuestion extends Component {
  render() {
    const { authorName, question, answer } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentVotes = (optionOneVotes / totalVotes) * 100;
    const optionTwoPercentVotes = (optionTwoVotes / totalVotes) * 100;

    return (
      <div>
        <span>Answered question details</span>
        <div>
          <h2>{`Asked by ${authorName}`}</h2>
          <div>
            <h2>Results:</h2>
            <div>
              <p>{`Would you rather ${question.optionOne.text}`}</p>
              {answer === OPTION_ONE && <p>Selected by you!</p>}
              <p>Percentage: {optionOnePercentVotes}</p>
              <p>{`${optionOneVotes} out of ${totalVotes} votes`}</p>
            </div>
            <div>
              <p>{`Would you rather ${question.optionTwo.text}`}</p>
              {answer === OPTION_TWO && <p>Selected by you!</p>}
              <p>Percentage: {optionTwoPercentVotes}</p>
              <p>{`${optionTwoVotes} out of ${totalVotes} votes`}</p>
            </div>
          </div>
        </div>
        <div />
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
    authorName: users[question.author].name,
    answer
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
