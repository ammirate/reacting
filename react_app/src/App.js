import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import NavBar from "./containers/application/navBar";
import UserListContainer from "./containers/users/userListContainer";
import UserContainer from "./containers/users/userContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/api/users/").then(res => {
      this.setState({ users: res.data });
      console.log("[app] did mount", this.state.users);
    });
  }

  render() {
    console.log("[app] render", this.state);

    return (
      <React.Fragment>
        <NavBar />
        <UserListContainer users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default App;
