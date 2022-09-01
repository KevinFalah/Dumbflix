import React from "react";
import MoviesContainer from "../components/MovieContainer";
import bgHero from '../Images/la-casa-de-papel-logo.png'

const Movie = () => {
  return (
    <>
      <div>
        <div className="background-hero-movie container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
          <h1 className='text-size text-start'>FURY</h1>
            <p className="">
            In April 1945, the Allies are making their final push in the European theater. A battle-hardened Army sergeant named Don "Wardaddy" Collier.
            </p>
            <div className="mb-4">
              <span>2019</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                Movie
              </button>
            </div>
            <div>
              <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                WATCH NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
      <MoviesContainer />
    </>
  );
};

export default Movie;
