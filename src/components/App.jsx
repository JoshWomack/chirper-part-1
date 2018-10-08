import React, { Component } from "react";
import Timeline from "./Timeline";
import CreateChirp from "./CreatePostForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: [
        {
          userName: "Frank",
          chirpContent:
            "Well, I don't know how many years on this earth I got left, I'm gonna get real weird with it.",
          chirpId: 5
        },
        {
          userName: "Charlie",
          chirpContent:
            "Dude, it's amazing. Look at this. Bro, you could chop a camel right in the hump and drink all of its milk right off the tip of this thing.",
          chirpId: 4
        },
        {
          userName: "Charlie",
          chirpContent:
            "@Dennis, Alright well I'm gonna check it out anyway, there could be something delicious in here that wasps do make and I want that",
          chirpId: 3
        },
        {
          userName: "Dennis",
          chirpContent: "@Charlie, no, wasps do not make honey.",
          chirpId: 2
        },
        {
          userName: "Charlie",
          chirpContent: "Do wasps make honey?",
          chirpId: 1
        }
      ],
      createChirp: false,
      numChirps: 5
    };
    this.handleCreateChirp = this.handleCreateChirp.bind(this);
    this.handleSubmittedChirp = this.handleSubmittedChirp.bind(this);
  }

  handleCreateChirp() {
    this.setState({ createChirp: true });
  }

  handleSubmittedChirp(chirp) {
    this.setState({
      chirps: [chirp, ...this.state.chirps],
      createChirp: false,
      numChirps: this.state.numChirps + 1,
      userName: chirp.userName
    });
  }

  render() {
    if (this.state.createChirp === false) {
      return (
        <div className="container">
          <div className="jumbotron mt-3">
            <h1 className="display-3 col mb-5">Chirper</h1>
            <button
              className="btn btn-lg shadow ml-5"
              onClick={this.handleCreateChirp}
            >
              Chirp Chirp!
            </button>
          </div>
          <Timeline chirps={this.state.chirps} />
        </div>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="jumbotron mt-3">
              <h1 className="display-3 col mb-5">Chirper</h1>
            </div>
          </div>
          <div className="container">
            <CreateChirp
              handleSubmittedChirp={this.handleSubmittedChirp}
              chirpId={this.state.numChirps}
            />
          </div>
        </>
      );
    }
  }
}

export default App;
