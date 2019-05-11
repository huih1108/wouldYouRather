import React, { Component, Fragment } from "react";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import QuestionsPage from "./QuestionsPage";
import LoginStatus from "./LoginStatus";
import ErrorPage from "./ErrorPage";
import PropTypes from "prop-types";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import QuestionDetails from "./QuestionDetails";
import { handleInitialData } from "../Actions/shared";
import Navbar from "./Navbar";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {authUser && <LoginStatus authUser={authUser} />}
            <Navbar />
            <Switch>
              <Route
                path="/"
                exact
                component={authUser ? QuestionsPage : Login}
              />
              <Route
                path="/add"
                exact
                component={authUser ? NewQuestion : Login}
              />
              <Route
                path="/leaderboard"
                exact
                component={authUser ? Leaderboard : Login}
              />
              <Route
                path="/question/:id"
                exact
                component={authUser ? QuestionDetails : Login}
              />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  authUser: PropTypes.string
};
function mapStatetoPros(store) {
  return {
    authUser: store.setUserReducer
  };
}

export default connect(mapStatetoPros)(App);
