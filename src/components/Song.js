import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

function Song({ song }) {
  return (
    <div>
      <Container>
        <Card className="my-3 p-3 rounded">
          <Card.Text as="div">
            <ReactAudioPlayer src={song.song} controls />
          </Card.Text>
          <Card.Body>
            <Link to={`/song/${song.id}`}>
              <Card.Title as="div">
                <strong>{song.movieName}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="div">
              <div className="my-3">
                <h3>{song.name}</h3>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Song;
