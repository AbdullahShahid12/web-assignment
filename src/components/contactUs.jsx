import React, { Component } from "react";
import {
  Link,
  TextField,
  Box,
  Typography,
  Button,
  FormControl,
} from "@material-ui/core";
class ContactUs extends Component {
  render() {
    return (
      <Box className="contact">
        <Typography variant="h2">Contact Us</Typography>
        <Box className="col s4"></Box>
        <Box className="col s4">
          <Box className="form">
            <FormControl fullWidth>
              <Box className="row">
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  multiline
                  fullWidth
                />
              </Box>
              <Box className="row">
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  multiline
                  fullWidth
                />
              </Box>
              <Box className="row">
                <TextField
                  id="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  fullWidth
                  rowsMax={4}
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
                  to="#"
                >
                  Send
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Box className="col s4"></Box>
      </Box>
    );
  }
}

export default ContactUs;
