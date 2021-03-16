export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 9
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = (id: number): {} => {
  const filteredPeople = movies.filter(movie => movie.id === id);
  return filteredPeople[0];
};

export const deleteMovie = (id: number): boolean => {
  const cleanedMovie = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name: string, score: number): {} => {
  const newMovie = {
    id: movies.length,
    name,
    score
  };

  movies.push(newMovie);

  return newMovie;
};
