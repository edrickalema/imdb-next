import React from "react";
import MovieCard from "./MovieCard";

const Result = ({ movies }) => {
  return (
    <div className="my-4 gap-4 px-4 sm:grid max-w-6xl mx-auto sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <MovieCard {...movie} />
          </div>
        );
      })}
    </div>
  );
};

export default Result;
