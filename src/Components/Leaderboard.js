import React from "react";
import { connect } from "react-redux";
import User from "./User";
import _ from "lodash";
import PropTypes from "prop-types";

const Leaderboard = ({ users }) => {
  let usersRanking;
  let sortedUser;

  sortedUser = _.sortBy(
    users,
    user => -(_.size(user.answers) + _.size(user.questions))
  );
  usersRanking = _.map(sortedUser, (user, index) => (
    <User key={user.id} user={user} rank={index + 1} />
  ));

  return <div>{usersRanking}</div>;
};

Leaderboard.propTypes = {
  users: PropTypes.object
};
function mapStatetoProps(store) {
  return {
    users: store.usersReducer
  };
}
export default connect(mapStatetoProps)(Leaderboard);
