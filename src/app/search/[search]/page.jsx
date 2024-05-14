import Result from "@/app/components/Result";
import { searchMovie } from "@/app/utils/action";
import React from "react";

const MovieSearch = async ({ params }) => {
  console.log(params.search);
  const res = await searchMovie(params.search);

  const movies = res.results;

  return (
    <div>
      {movies && movies.length === 0 ? (
        <h1 className="text-center text-5xl py-4 font-bold">No movie found</h1>
      ) : (
        <Result movies={movies} />
      )}
    </div>
  );
};

export default MovieSearch;
