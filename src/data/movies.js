import avengers from "../images/avenger.jpeg";
import inception from "../images/inception.jpeg";
import interstellar from "../images/interstellar.jpeg";
import joker from "../images/joker.jpeg";
import darkknight from "../images/darkknight.jpeg";
import spiderman from "../images/spiderman.jpeg";
import avatar from "../images/avatar.jpeg";
import harrypotter from "../images/harrypotter.jpeg";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action, Adventure",
    language: "English",
    duration: "3h 2m",
    rating: 8.4,
    releaseDate: "26 April 2019",
    image: avengers,
  },
  {
    id: 2,
    title: "Inception",
    genre: "Action, Sci-Fi",
    language: "English",
    duration: "2h 28m",
    rating: 8.8,
    releaseDate: "16 July 2010",
    image: inception,
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi, Drama",
    language: "English",
    duration: "2h 49m",
    rating: 8.7,
    releaseDate: "7 November 2014",
    image: interstellar,
  },
  {
    id: 4,
    title: "Joker",
    genre: "Crime, Drama",
    language: "English",
    duration: "2h 2m",
    rating: 8.4,
    releaseDate: "4 October 2019",
    image: joker,
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action, Crime",
    language: "English",
    duration: "2h 32m",
    rating: 9.0,
    releaseDate: "18 July 2008",
    image: darkknight,
  },
  {
    id: 6,
    title: "Spider-Man",
    genre: "Action, Adventure",
    language: "English",
    duration: "2h 1m",
    rating: 7.4,
    releaseDate: "3 May 2002",
    image: spiderman,
  },
  {
    id: 7,
    title: "Avatar",
    genre: "Action, Fantasy",
    language: "English",
    duration: "2h 42m",
    rating: 7.9,
    releaseDate: "18 December 2009",
    image: avatar,
  },
  {
    id: 8,
    title: "Harry Potter",
    genre: "Fantasy, Adventure",
    language: "English",
    duration: "2h 10m",
    rating: 8.1,
    releaseDate: "15 July 2011",
    image: harrypotter,
  },
];

export default movies;