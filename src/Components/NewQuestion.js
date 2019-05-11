import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { handleAddQuestion } from "../Actions/questions";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class NewQuestion extends Component {
  state = {
    option1: "",
    option2: "",
    submitted: false
  };
  handleOptionOne = e => {
    this.setState({ option1: e.target.value });
  };
  handleOptionTwo = e => {
    this.setState({ option2: e.target.value });
  };
  handleSubmitNewQuestion = () => {
    this.props.handleAddQuestion(
      {
        optionOneText: this.state.option1,
        optionTwoText: this.state.option2,
        author: this.props.user
      },
      () => {
        //console.log("callback is called"),
        this.setState({
          submitted: true
        });
      }
    );
  };

  render() {
    if (this.state.submitted) {
      return <Redirect to="/" />;
    }
    return (
      <div className="newquestion">
        Woud you rather
        <input
          id="option1"
          className="newquestion-input"
          onChange={this.handleOptionOne}
        />
        or
        <input
          id="option2"
          className="newquestion-input"
          onChange={this.handleOptionTwo}
        />
        <Button
          disabled={this.state.option1 === "" || this.state.option2 === ""}
          className="question-submit"
          onClick={this.handleSubmitNewQuestion}
        >
          Submit
        </Button>
      </div>
    );
  }
}
NewQuestion.propTypes = {
  user: PropTypes.string
};
function mapStatetoProps(store) {
  return {
    user: store.setUserReducer
  };
}

export default connect(
  mapStatetoProps,
  { handleAddQuestion }
)(NewQuestion);
