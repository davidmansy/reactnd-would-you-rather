import React, { Component, Fragment } from 'react';
import Questions from './Questions';

class Home extends Component {
  state = {
    answered: false
  };

  handleSelectAnsweredQuestions = (answered, e) => {
    e.preventDefault();
    this.setState(() => ({
      answered
    }));
  };

  render() {
    const { answered } = this.state;
    return (
      <Fragment>
        <nav className="home__nav">
          <ul className="home__nav__row">
            <li className="home__nav__list">
              <a
                className={`home__nav__link home__nav__link--left ${
                  !answered ? 'home__nav__link--active' : ''
                }`}
                onClick={e => this.handleSelectAnsweredQuestions(false, e)}
                href="/unanswered"
              >
                Unanswered Questions
              </a>
            </li>
            <li className="home__nav__list">
              <a
                className={`home__nav__link home__nav__link--right ${
                  answered ? 'home__nav__link--active' : ''
                }`}
                onClick={e => this.handleSelectAnsweredQuestions(true, e)}
                href="/answered"
              >
                Answered Questions
              </a>
            </li>
          </ul>
        </nav>
        <Questions answered={answered} />
      </Fragment>
    );
  }
}

export default Home;
