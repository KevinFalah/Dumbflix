import React from 'react'
import MovieContainer from '../MovieContainer'
import SeriesContainer from '../SeriesContainer'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListFilm() {
  return (
    <>
    <div className='d-flex mt-4 ms-5'>
      <div className='d-flex flex-row gap-4'>
        <h4 className='text-white'>List Film</h4>
        <select className='bg-black text-white' name="list" id="list">
          <option disabled selected>Category</option>
          <option value="tvSeries">TV Series</option>
          <option value="movie">Movie</option>
        </select>
      </div>
      <div style={{marginLeft: "920px"}}>
        <Button className="btn bg-danger text-white border-0 px-4" as={Link} to='/add-film'>Add Film</Button>
      </div>
    </div>
    
    <div className='sectionSeries'>
      <SeriesContainer /> 
      <MovieContainer />
    </div>
      
    </>
  )
}

export default ListFilm