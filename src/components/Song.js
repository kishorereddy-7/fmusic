import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

function Song({ song }) {
  const mystyle = {
    width: "320px",
    height: "200px",
  };

  const myPlayList = useSelector((state) => state.myPlayList);
  const { myPlayListItems } = myPlayList;

  const navigate = useNavigate();

  const addToPlayListHandler = () => {
    navigate(`/myplaylist/${song.id}`);
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
          {myPlayListItems.find((x) => x.song_id === song.id) ? (
            <Button variant="primary" onClick={addToPlayListHandler}>
              Your PlayList Song
            </Button>
          ) : (
            <Button variant="primary" onClick={addToPlayListHandler}>
              Add to Playlist
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Song;
