import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_: any, { limit, rating }) => getMovies(limit, rating)
  }
};

export default resolvers;
