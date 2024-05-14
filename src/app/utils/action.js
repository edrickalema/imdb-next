const API_KEY = process.env.API_KEY;

export const getSingleMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export const searchMovie = async (search) => {
  const url = `  https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&include_adult=false&language=en-US&page=1`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
