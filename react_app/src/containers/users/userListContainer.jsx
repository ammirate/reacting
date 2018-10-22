import React, { Component } from "react";
import UserContainer from "./userContainer";
import axios from "axios";
import { ToastContainer, ToastStore } from "react-toasts";

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    axios.get("http://127.0.0.1:5000/api/users/").then(resp => {
      this.setState({ users: resp.data });
    });
  }

  handleDelete = () => {
    ToastStore.success("Deleted");
    this.refresh();
  };

  render() {
    if (!this.state.users) {
      return <label>No users</label>;
    }
    return (
      <React.Fragment>
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
            {this.state.users.map(user => (
              <UserContainer
                user={user}
                key={user.id}
                onDelete={this.handleDelete}
              />
            ))}
          </tbody>
        </table>
        <ToastContainer
          store={ToastStore}
          position={ToastContainer.POSITION.TOP_CENTER}
        />
      </React.Fragment>
    );
  }
}

export default UserListContainer;
