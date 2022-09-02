import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from './MovieList'
import {useState} from 'react'
import dataMovies from '../dataDummy/DataFakeMovies'
console.log(dataMovies)

function MovieContainer() {
    // const [movieList, setMovieList] = useState(
    //     [
    //         {
    //             movieImg: dummyGodfather,
    //             title:"The Godfather",
    //             year: 2022
    //         },
    //         {
    //             movieImg: dummyGodfather,
    //             title:"The Godfather",
    //             year: 2022
    //         },
    //         {
    //             movieImg: dummyGodfather,
    //             title:"The Godfather",
    //             year: 2022
    //         },
    //         {
    //             movieImg: dummyGodfather,
    //             title:"The Godfather",
    //             year: 2022
    //         },
    //         {
    //             movieImg: dummyGodfather,
    //             title:"The Godfather",
    //             year: 2022
    //         },
    //         {
    //             movieImg: dummyGodfather,
    //             title:"The Godfather",
    //             year: 2022
    //         }
    //     ]
    // )

    

  return (
    <div >
      <Container className="my-5 overflow-hidden" id="" >
        <h3 className="text-light">Movies</h3>
        <Row>
          {dataMovies.map((movies, index) => {
            return(
              <Col md={2} key={index}>
                  <MovieList 
                    movieImg={movies.movieImg}
                    title={movies.title}
                    year={movies.year}
                  />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MovieContainer;
