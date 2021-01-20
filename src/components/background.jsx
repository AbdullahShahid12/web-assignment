import React, { Component } from "react";
import back from "../images/bg.jpg";
class Background extends Component {
  render() {
    return (
      <div className="main" style={{ backgroundImage: `url(${back})` }}>
        <div className="row">
          <div className="col s12">
            <img className="logo" src="logo.png" alt=""></img>
          </div>
        </div>

        <div class="row" clasName="white">
          <div class="col s12 m4">
            <h5>Web Development</h5>
          </div>
          <div class="col s12 m4">
            <h5>Mobile Development</h5>
          </div>
          <div class="col s12 m4">
            <h5>Software Consulting</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
