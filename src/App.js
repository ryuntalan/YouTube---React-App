import React from "react";

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Lofi from "./components/Lofi";
import Jazz from "./components/Jazz";
import Classical from "./components/Classical";
import Error from "./components/Error";
import Matcha from "./img/Matcha.png";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink to="/YouTube---React-App/">
            <img className="logo" src={Matcha} alt="Matcha cafe logo" />
          </NavLink>

          <Switch>
            <Route path="/YouTube---React-App/" component={Home} exact />
            <Route path="/Lofi" component={Lofi} />
            <Route path="/jazz" component={Jazz} />
            <Route path="/classical" component={Classical} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
