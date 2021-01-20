import { Link } from "@material-ui/core";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="foot">
        <br />
        <br />

        <Link
          style={{ color: "#70c1b3", paddingTop: "10%", paddingRight: "2%" }}
        >
          Home
        </Link>
        <Link
          style={{ color: "#70c1b3", paddingTop: "10%", paddingRight: "2%" }}
        >
          Contact Us
        </Link>
        <Link
          style={{ color: "#70c1b3", paddingTop: "10%", paddingRight: "2%" }}
        >
          Privacy
        </Link>
        <Link
          style={{ color: "#70c1b3", paddingTop: "10%", paddingRight: "2%" }}
        >
          Terms & Conditions
        </Link>
        <p>© 2019 CHLELA INC. All rights reserved</p>
        <p>♥ from San Francisco, CA</p>
      </div>
    );
  }
}

export default Footer;
