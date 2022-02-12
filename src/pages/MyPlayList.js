import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";
import { Row, Col, ListGroup, Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Message from "../components/Message";
import {
  addToMyPlayList,
  removeFromMyPlayList,
} from "../actions/myPlayListActions";

function MyPlayList() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const myPlayList = useSelector((state) => state.myPlayList);

  const { myPlayListItems } = myPlayList;

  useEffect(() => {
    if (id) {
      dispatch(addToMyPlayList(id));
    }
  }, [dispatch, id]);

  const removeFromMyPlayListHandler = (id) => {
    dispatch(removeFromMyPlayList(id));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>MyPlayList</h1>
          {myPlayListItems.length === 0 ? (
            <Message variant="info">
              Your PlayList is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <div>
              <h2>PlayList Songs {myPlayListItems.length}</h2>
              <ListGroup variant="flush">
                {myPlayListItems.map((item) => (
                  <ListGroup.Item key={item.song_id}>
                    <Row>
                      <Col md={2} lg={2}>
                        <Image src={item.image} alt={item.name} thumbnail />
                      </Col>
                      <Col md={3}>
                        <Link to={`/song/${item.song_id}`}>{item.name}</Link>
                        <p>Movie Name: {item.movieName}</p>
                      </Col>
                      <Col md={5}>
                        <ReactAudioPlayer src={item.song} controls />
                      </Col>
                      <Col md={1}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() =>
                            removeFromMyPlayListHandler(item.song_id)
                          }
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}
        </Col>
      </Row>
      </Container>
  );
}

export default MyPlayList;
