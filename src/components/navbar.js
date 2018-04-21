import React , { Component }  from "react";
import { Link } from "react-router-dom";
import UserLogIn from "./login/UserLogIn";
import UserNotLogIn from "./login/UserNotLogIn";

 class NavBar extends Component {
  render() {
    let ComponentToShow = this.props.logInStatus ? (
      <UserLogIn logOut={this.props.logOut} />
    ) : (
      <UserNotLogIn logIn={this.props.logIn} />
    );

    return (
      <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

          Navbar

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                Home
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}


export default NavBar;
