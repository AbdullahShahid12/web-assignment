import React, { Component } from "react";

class Expertise extends Component {
  state = {};
  render() {
    return (
      <div className="expertise">
        <h2>Expertise</h2>
        <p>
          We are a group of software engineers with diverse backgrounds and
          years of experience so we're up to <b>ANY</b> challenge. Here's what
          we've been excited about lately:
        </p>
        <div className="row">
          <div className="col s12 m4">
            <ul>
              <li>Typescript/Javascript</li>
              <li>React, React Native</li>
              <li>MongoDB, SQL Server, Postgres</li>
              <li>HTML/CSS/AMP</li>
            </ul>
          </div>
          <div className="col s12 m4">
            <ul>
              <li>NodeJS</li>
              <li>.NET</li>
              <li>Flask</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
          <div className="col s12 m4">
            <ul>
              <li>Azure, Heroku</li>
              <li>C#</li>
              <li>Swift</li>
              <li>NopCommerce</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Expertise;
