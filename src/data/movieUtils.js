import movies from "./movies";

export function getMovieById(id) {
  return movies.find(movie => movie.id === id);
}
