import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Tab, Tabs } from "react-bootstrap";
import QuestionItem from "./QuestionItem";
import PropTypes from "prop-types";

class QuestionsPage extends React.PureComponent {
  render() {
    const { questions, user, users } = this.props;
    let answered;
    let unanswered;
    answered = _.filter(questions, question => {
      return Object.keys(user.answers).includes(question.id);
    }).sort((a, b) => b.timestamp - a.timestamp);
    unanswered = _.filter(questions, question => {
      return !Object.keys(user.answers).includes(question.id);
    }).sort((a, b) => b.timestamp - a.timestamp);

    return (
      <div>
        <Tabs defaultActiveKey="unanswered">
          <Tab eventKey="unanswered" title="Unanswered Questions">
            {unanswered &&
              unanswered.map(question => (
                <div key={question.id}>
                  <QuestionItem
                    question={question}
                    user={users[question.author]}
                  />
                </div>
              ))}
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            {answered &&
              answered.map(question => (
                <div key={question.id}>
                  <QuestionItem
                    question={question}
                    user={users[question.author]}
                  />
                </div>
              ))}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

QuestionsPage.propTypes = {
  users: PropTypes.object,
  user: PropTypes.object,
  questions: PropTypes.object
};

function mapStatetoProps(store) {
  return {
    questions: store.questionsReducer,
    user: store.usersReducer[store.setUserReducer],
    users: store.usersReducer
  };
}

export default connect(mapStatetoProps)(QuestionsPage);
