import React, { Component } from "react";
import UserContainer from "./userContainer";

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.users) {
      return <label>No users</label>;
    }
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <td>#</td>
            <td>Avatar</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          {this.props.users.map(user => (
            <UserContainer user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserListContainer;
