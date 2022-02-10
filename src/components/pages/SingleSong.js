import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, ListGroup, Button, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

function SingleSong() {
  const [song, setSong] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSong() {
      const { data } = await axios.get(
        `https://f-music-back.herokuapp.com/api/song/${id}`
      );
      setSong(data);
    }
    fetchSong();
  });
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={song.image} alt={song.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <ReactAudioPlayer src={song.song} controls />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{song.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>MovieName: {song.movieName}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Button variant="primary">Add to Playlist</Button>
        </Col>
      </Row>
    </div>
  );
}

export default SingleSong;
