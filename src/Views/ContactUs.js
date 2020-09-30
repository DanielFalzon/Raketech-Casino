import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.name} said ${this.state.message}`);
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="mb-3">
          <strong>Drop us an email</strong>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="name"
            className="mb-3"
            fullWidth
            required
            id="form-name"
            label="full name"
            onChange={this.handleInputChange}
          />
          <TextField 
            name="email"
            className="mb-3" 
            fullWidth 
            required 
            id="form-email" 
            label="email"
            onChange={this.handleInputChange}
          />
          <TextField
            name="subject"
            className="mb-3"
            fullWidth
            required
            id="form-subject"
            label="subject"
            onChange={this.handleInputChange}
          />
          <TextField
            name="message"
            className="mb-3"
            fullWidth
            multiline
            required
            rowsMax={Infinity}
            rows={4}
            id="form-message"
            label="message"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default ContactUs;
