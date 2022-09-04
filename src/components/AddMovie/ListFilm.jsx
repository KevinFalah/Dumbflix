import React, { useState } from 'react'
import MovieContainer from '../MovieContainer'
import SeriesContainer from '../SeriesContainer'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListFilm() {

  const [category, setCategory] = useState("TV Series")


  console.log(category)
  return (
    <>
    <div className='d-flex mt-4 ms-5'>
      <div className='d-flex flex-row gap-4'>
        <h4 className='text-white'>List Film</h4>
        <select value={category} onChange={(e) => setCategory(() => e.target.value)} className='bg-black text-white' name="list" id="list">
          <option disabled>Category</option>
          <option>TV Series</option>
          <option>Movie</option>
        </select>
      </div>
      <div style={{marginLeft: "920px"}}>
        <Button className="btn bg-danger text-white border-0 px-4" as={Link} to='/add-film'>Add Film</Button>
      </div>
    </div>
    
    <div className='sectionSeries'>
      {category == "TV Series" ? 
      (
        <SeriesContainer /> 
      )
      :
      (
        <MovieContainer />
      )
    }
    </div>
      
    </>
  )
}

export default ListFilm