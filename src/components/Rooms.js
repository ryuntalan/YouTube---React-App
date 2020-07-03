import React from "react";
import { NavLink } from "react-router-dom";

import Lofi from "../img/Lofi.png";

import Jazz from "../img/Jazz.png";

import Classical from "../img/Classical.png";

class Rooms extends React.Component {
  render() {
    return (
      <div rooms justify="center" alignItems="center">
        <NavLink to="/Lofi">
          <img className="button" src={Lofi} alt="lofi button" />
        </NavLink>
        <NavLink to="/jazz">
          <img className="button" src={Jazz} alt="jazz button" />
        </NavLink>
        <NavLink to="/classical">
          <img className="button" src={Classical} alt="classical button" />
        </NavLink>
      </div>
    );
  }
}

export default Rooms;
