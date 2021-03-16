import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_: any, { limit, rating }) => getMovies(limit, rating),
    movie: (_: any, { id }) => getMovie(id),
    suggestions: (_: any, { id }) => getSuggestions(id)
  }
};

export default resolvers;
