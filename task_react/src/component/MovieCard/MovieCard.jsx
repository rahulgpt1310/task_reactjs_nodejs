// import React, { useRef, useState } from "react";
// import MovieHeader  from '../MovieHeader/MovieHeader';
import "./MovieCard.css";

const MovieCard = ({ title, id, rank }) => {
  return (
    <div className="card">
      {/* <MovieHeader /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="card-text">{`Rank: ${rank}`} </p>
        <p className="card-text">{`released date : -`} </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default MovieCard;
