import React, { Component } from "react";
import ending from "../images/ending.jpg";
class Ending extends Component {
  render() {
    return (
      <div
        className="ending"
        style={{ backgroundImage: `url(${ending})` }}
      ></div>
    );
  }
}

export default Ending;
