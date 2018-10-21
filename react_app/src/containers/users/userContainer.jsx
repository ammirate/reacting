import React, { Component } from "react";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("USER", this.props.user);
    const user = this.props.user;

    return (
      <tr>
        <td>{user.id}</td>
        <td>
          <img src={user.thumbnail} alt="X" />
        </td>

        <td>
          <div>
            {user.first_name} {user.last_name}
            <br />
            {user.birth_date}
          </div>
        </td>

        <td>{user.email}</td>
      </tr>
    );
  }
}

export default UserContainer;
