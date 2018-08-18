import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import User from './User';

const Leaderboard = ({ usersIds }) => {
  return (
    <Fragment>
      {usersIds.map((id, index) => (
        <User key={id} id={id} rank={index} />
      ))}
    </Fragment>
  );
};

function mapStateToProps({ users }) {
  const usersIds = Object.keys(users).sort((u1, u2) => {
    const scoreU1 =
      users[u1].questions.length + Object.keys(users[u1].answers).length;
    const scoreU2 =
      users[u2].questions.length + Object.keys(users[u2].answers).length;
    return scoreU2 - scoreU1;
  });
  return {
    usersIds
  };
}

export default connect(mapStateToProps)(Leaderboard);
