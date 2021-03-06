import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from './actions/shared';
import PrivateRoute from './utils/PrivateRoute';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import AddQuestion from './components/AddQuestion';
import NotFound from './components/NotFound';
import QuestionDetails from './components/QuestionDetails';
import Leaderboard from './components/Leaderboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loading } = this.props;
    const isAuthenticated = authedUser ? true : false;

    return (
      <Router>
        <Fragment>
          <Header />
          <LoadingBar />
          <div className="container">
            {loading.default === 1 ? null : (
              <Switch>
                <PrivateRoute
                  path="/"
                  exact
                  component={Home}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/add"
                  exact
                  component={AddQuestion}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/questions/:id"
                  exact
                  component={QuestionDetails}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/leaderboard"
                  exact
                  component={Leaderboard}
                  isAuthenticated={isAuthenticated}
                />
                <Route path="/login" component={Login} />
                <Route path="/index.html" component={Login} />
                <Route component={NotFound} />
              </Switch>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStatesToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loading: loadingBar
  };
}

export default connect(mapStatesToProps)(App);
