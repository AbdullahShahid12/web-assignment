import React, { Component } from "react";
import { Link, TextField } from "@material-ui/core";

class Update extends Component {
  render() {
    return (
      <div className="update">
        <h2>Stay up to date!</h2>
        <div className="col s2"></div>

        <div className="col s8">
          <TextField
            inputProps={{ style: { borderBottom: "0px" } }}
            id="email"
            label="Email"
            variant="outlined"
            style={{
              width: "70%",
              paddingBottom: "12%",
            }}
          />
          <Link
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "150%",
              paddingLeft: "5%",
            }}
          >
            Subscribe
          </Link>
        </div>
        <div className="col s2"></div>
      </div>
    );
  }
}

export default Update;
