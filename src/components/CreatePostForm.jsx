import React, { Component } from "react";

class CreateChirp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {
    this.props.handleSubmittedChirp(this.state);
  }

  render() {
    return (
      <div className="container chirp-creation d-flex justify-content-center row">
        <div className="card col-6 p-2">
          <label for="userName">Who's Chirping?</label>
          <input
            className="mb-2"
            type="text"
            name="userName"
            onChange={this.handleInput}
          />
          <label>What are you Chirping about?</label>
          <textarea
            type="text"
            name="chirpContent"
            className="mb-2"
            onChange={this.handleInput}
          />
          <button className="btn shadow w-25" onClick={this.handleSubmit}>
            Chirp!
          </button>
        </div>
      </div>
    );
  }
}

export default CreateChirp;
