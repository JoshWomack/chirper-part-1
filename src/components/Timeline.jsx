import React from "react";

function Timeline(props) {
  let chirps = props.chirps.map(chirp => {
    return (
      <div className="card mb-3" key={chirp.chirpId}>
        <h4 className="card-title card-title border p-1">{chirp.userName}</h4>
        <p className="card-text p-3">{chirp.chirpContent}</p>
      </div>
    );
  });

  return chirps;
}

export default Timeline;
