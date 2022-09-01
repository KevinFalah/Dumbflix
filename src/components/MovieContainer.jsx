import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from './MovieList'
import {useState} from 'react'
import dummyGodfather from '../Images/godfather.png'

function MovieContainer() {
    const [movieList, setMovieList] = useState(
        [
            {
                movieImg: dummyGodfather,
                title:"The Godfather",
                year: 2022
            },
            {
                movieImg: dummyGodfather,
                title:"The Godfather",
                year: 2022
            },
            {
                movieImg: dummyGodfather,
                title:"The Godfather",
                year: 2022
            },
            {
                movieImg: dummyGodfather,
                title:"The Godfather",
                year: 2022
            },
            {
                movieImg: dummyGodfather,
                title:"The Godfather",
                year: 2022
            },
            {
                movieImg: dummyGodfather,
                title:"The Godfather",
                year: 2022
            }
        ]
    )

  return (
    <div >
      <Container className="my-5 overflow-hidden" id="" >
        <h3 className="text-light">Movies</h3>
        <Row>
          {movieList.map((movie, index) => {
            return(
                <Col md={2} key={index}>
                    <MovieList 
                        movieImg={movie.movieImg}
                        title={movie.title}
                        year={movie.year}
                    /> {/* Looping */}
                </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MovieContainer;
