import React from "react";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const QuestionItem = ({ question, user }) => {
  return (
    <Link to={`/question/${question.id}`} className="question">
      <div key={question.id} className="question-item">
        <img src={user.avatarURL} alt="avatar" className="avatar" />
        <div>{user.name}</div>
        <div className="question-text">
          Would you rather {question.optionOne.text} or{" "}
          {question.optionTwo.text}
        </div>
        <div className="question-time">@{formatDate(question.timestamp)}</div>
      </div>
    </Link>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object,
  user: PropTypes.object
};
export default QuestionItem;
