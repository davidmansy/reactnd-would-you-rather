import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnsweredQuestion extends Component {
  render() {
    const { authorName, question } = this.props;
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
              <p>Percentage: {optionOnePercentVotes}</p>
              <p>{`${optionOneVotes} out of ${totalVotes} votes`}</p>
            </div>
            <div>
              <p>{`Would you rather ${question.optionTwo.text}`}</p>
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

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question,
    authorName: users[question.author].name
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
