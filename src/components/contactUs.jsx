import React, { Component } from "react";
import Axios from "axios";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Link,
  TextField,
  Box,
  Typography,
  Button,
  FormControl,
} from "@material-ui/core";
class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };
  handleSubmit = (e) => {
    Axios.post("http://localhost:5000/api/contact/send", this.state)
      .then((data) => {
        this.setState({ name: "", email: "", message: "" });
        console.log("success");
      })
      .catch((err) => {
        this.setState({ name: "", email: "", message: "" });
        console.log("fail");
      });
  };

  render() {
    return (
      <Box className="contact">
        <Typography variant="h2">Contact Us</Typography>
        <Box className="col s4"></Box>
        <Box className="col s4">
          <Box className="form">
            <ValidatorForm fullWidth ref="form" onSubmit={this.handleSubmit}>
              <Box className="row">
                <TextValidator
                  id="name"
                  label="Name"
                  variant="outlined"
                  multiline
                  fullWidth
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  value={this.state.name}
                  onChange={this.handleName}
                />
              </Box>
              <Box className="row">
                <TextValidator
                  id="email"
                  label="Email"
                  variant="outlined"
                  multiline
                  fullWidth
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </Box>
              <Box className="row">
                <TextValidator
                  id="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  fullWidth
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  rowsMax={4}
                  value={this.state.message}
                  onChange={this.handleMessage}
                />
              </Box>
              <Box
                className="con"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  style={{
                    display: "flex",

                    backgroundColor: " #247ba0",
                    color: "white",
                  }}
                  type="submit"
                >
                  Send
                </Button>
              </Box>
            </ValidatorForm>
          </Box>
        </Box>
        <Box className="col s4"></Box>
      </Box>
    );
  }
}

export default ContactUs;
