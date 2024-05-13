import React from "react";
import Result from "./components/Result";

const API_KEY = process.env.API_KEY;

const HomePage = async ({ searchParams }) => {
  const param = searchParams.genre || "fetchTrending";

  const Top_Rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const Trending = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`;

  const url = `${param === "fetchTopRated" ? Top_Rated : Trending}`;

  const res = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(url);
      resolve(response);
    }, 2000);
  });

  if (!res.ok) throw new Error("There was an error processing");
  const data = await res.json();

  const result = data.results;

  return (
    <div>
      <form></form>
      <Result movies={result} />
    </div>
  );
};

export default HomePage;
