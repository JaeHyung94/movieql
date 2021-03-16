import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_: any, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_: any, { name, score }) => addMovie(name, score),
    deleteMovie: (_: any, { id }) => deleteMovie(id)
  }
};

export default resolvers;
