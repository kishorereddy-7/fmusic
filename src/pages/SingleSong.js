import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Col, ListGroup, Button, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { listSongDetails } from "../actions/songActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function SingleSong() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myPlayList = useSelector((state) => state.myPlayList);
  const { myPlayListItems } = myPlayList;

  const songDetails = useSelector((state) => state.songDetails);
  const { loading, error, song } = songDetails;

  useEffect(() => {
    dispatch(listSongDetails(id));
  }, [dispatch, id]);

  const addToPlayListHandler = () => {
    navigate(`/myplaylist/${id}`);
  };

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
            {myPlayListItems.find((x) => x.song_id === song.id) ? (
              <Button variant="primary" onClick={addToPlayListHandler}>
                Your PlayList Song
              </Button>
            ) : (
              <Button variant="primary" onClick={addToPlayListHandler}>
                Add to Playlist
              </Button>
            )}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default SingleSong;
