import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Song from "../components/Song";
import { listSongs } from "../actions/songActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function Home() {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.songList);
  const { loading, error, songs } = songList;

  useEffect(() => {
    dispatch(listSongs());
  }, [dispatch]);
  // console.log(songs)
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" />
      ) : (
        <Row>
          {songs.map((song) => (
            <Col key={song.id} sm={12} md={6} lg={4} xl={3}>
              <Song song={song} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Home;
