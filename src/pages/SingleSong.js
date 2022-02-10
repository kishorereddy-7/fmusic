import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, ListGroup, Button, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { listSongDetails } from "../actions/songActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function SingleSong() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const songDetails = useSelector((state) => state.songDetails);
  const { loading, error, song } = songDetails;

  useEffect(() => {
    dispatch(listSongDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
      )}
    </div>
  );
}

export default SingleSong;
