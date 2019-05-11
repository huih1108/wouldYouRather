import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { logOut } from "../Actions/setUser";
import PropTypes from "prop-types";

class LoginStatus extends Component {
  handleLogOut = () => {
    this.props.logOut();
  };

  render() {
    const { user } = this.props;
    return (
      <div className="loginstatus">
        <img src={user.avatarURL} alt="avatar" className="avatar" />
        {user.name}
        <Button
          className="loginstatus-logoutbutton"
          onClick={this.handleLogOut}
        >
          Logout
        </Button>
      </div>
    );
  }
}
LoginStatus.protTypes = {
  user: PropTypes.array
};

function mapStatetoProps({ usersReducer }, { authUser }) {
  return { user: usersReducer[authUser] };
}

export default connect(
  mapStatetoProps,
  { logOut }
)(LoginStatus);
