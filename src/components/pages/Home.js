import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Song from '../Song';

function Home() {
  const [songs, setSongs] = useState([])

    useEffect(()=> {
      async function fetchSongs() {
        const { data } = await axios.get('https://f-music-back.herokuapp.com/api/songs/')
        setSongs(data)
      }
      fetchSongs()
    }, [])
    console.log(songs)
  return (
    <div>
          <Row>{songs.map(song => (
            <Col key={song.id} sm={12} md={6} lg={4} xl={3}>
                <Song song={song} />
            </Col>
          ))}
          </Row>
    </div>
  )
}

export default Home
