import React, { Component } from "react";
import "./App.css";

import NavBar from "./containers/application/navBar";
import UserListContainer from "./containers/users/userListContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   axios.get("http://127.0.0.1:5000/api/users/").then(res => {
  //     this.setState({ users: res.data });
  //     console.log("[app] did mount", this.state.users);
  //   });
  // }

  render() {
    console.log("[app] render", this.state);

    return (
      <React.Fragment>
        <NavBar />
        <UserListContainer />
      </React.Fragment>
    );
  }
}

export default App;
