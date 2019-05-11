import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const User = ({ user, rank }) => {
  let numQAnswered = _.size(user.answers);
  let numQAsked = _.size(user.questions);
  let totalQ = numQAnswered + numQAsked;
  return (
    <div className="leaderboard-user">
      Rank #{rank}
      <img src={user.avatarURL} alt="avatar" className="avatar" />
      {user.name}
      <div className="user-detail">
        <h4>total score {totalQ}</h4>
        <h6>questions answered {numQAnswered}</h6>
        <h6>questions asked {numQAsked}</h6>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  rank: PropTypes.number
};
export default User;
