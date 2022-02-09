import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

function Song({ song }) {
  const mystyle = {
    width: "320px",
    height: "200px",
  };

  return (
    <div>
      <Card style={{ width: "22rem" }} className="my-3 p-3 rounded">
        <Link to={`/song/${song.id}`}>
          <Card.Img style={mystyle} variant="top" src={song.image} />
        </Link>
        <Card.Text as="div">
          <ReactAudioPlayer src={song.song} controls />
        </Card.Text>
        <Card.Body>
          <Link to={`/song/${song.id}`}>
            <Card.Title>{song.name}</Card.Title>
          </Link>
          <Card.Text>{song.movieName}</Card.Text>
          <Button variant="primary">Add to Playlist</Button>
        </Card.Body>
      </Card>
      </div>
  );
}

export default Song;
