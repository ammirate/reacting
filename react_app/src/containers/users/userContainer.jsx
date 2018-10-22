import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, ToastStore } from "react-toasts";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDelete() {
    const user = this.props.user;
    let _confirm = window.confirm(
      "Do you really want to delete " +
        user.first_name +
        " " +
        user.last_name +
        "?"
    );
    if (_confirm) {
      axios.delete("http://127.0.0.1:5000/api/users/" + user.id).then(resp => {
        ToastStore.success("Deleted");
      });
    }
  }

  render() {
    console.log("USER", this.props.user);
    const user = this.props.user;

    return (
      <React.Fragment>
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
          <td>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={event => this.handleDelete()}
            >
              Delete
              <i className="fa fa-trash fa-2x" aria-hidden="true" />
            </button>
          </td>
        </tr>
        <ToastContainer
          store={ToastStore}
          position={ToastContainer.POSITION.TOP_CENTER}
        />
      </React.Fragment>
    );
  }
}

export default UserContainer;
