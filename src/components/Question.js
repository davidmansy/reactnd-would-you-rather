import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';

class Question extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        {match.params.id === '121' ? (
          <Redirect to="/notfound" />
        ) : (
          <div>
            <Header />
            <h1>Question {match.params.id}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Question;
