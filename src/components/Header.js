import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>The Cafe</h1>
        <h2>Your local online study spot</h2>
        <h2 className="question">Where would you like to study?</h2>
      </div>
    );
  }
}

export default Header;
