import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaStar } from "react-icons/fa";
import moviesData from "../data/moviesData";
import "./Movies.css";

function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [language, setLanguage] = useState("All");

  const genres = [
    "All",
    "Action",
    "Sci-Fi",
    "Romance",
    "Fantasy",
    "Comedy",
    "Drama",
    "Thriller",
    "Horror",
    "Crime",
  ];

  const languages = [
    "All",
    "English",
    "Hindi",
    "Japanese",
    "Telugu",
    "Kannada",
    "Korean",
    "French",
    "Chinese",
  ];

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = genre === "All" || movie.genre === genre;

    const matchesLanguage = language === "All" || movie.language === language;

    return matchesSearch && matchesGenre && matchesLanguage;
  });

  return (
    <div className="movies-page">
      <div className="movies-header">
        <h1>Movies</h1>
        <p>Explore movies from around the world</p>
      </div>

      <div className="movies-controls">
        <div className="movie-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <span>Genre</span>

            <div className="genre-filters">
              {genres.map((item) => (
                <button
                  key={item}
                  className={`genre-btn ${genre === item ? "active" : ""}`}
                  onClick={() => setGenre(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span>Language</span>

            <div className="genre-filters">
              {languages.map((item) => (
                <button
                  key={item}
                  className={`genre-btn ${language === item ? "active" : ""}`}
                  onClick={() => setLanguage(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="movies-count">
        <p>
          {filteredMovies.length}{" "}
          {filteredMovies.length === 1 ? "movie" : "movies"} found
        </p>
      </div>

      <section className="all-movies-section">
        {filteredMovies.length > 0 ? (
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <div className="movie-image">
                  <img src={movie.image} alt={movie.title} />

                  <span className="movie-rating">
                    <FaStar /> {movie.rating}
                  </span>
                </div>

                <div className="movie-info">
                  <h2>{movie.title}</h2>

                  <div className="movie-meta">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.duration}</span>
                  </div>

                  <div className="movie-details">
                    <span>{movie.genre}</span>
                    <span>{movie.language}</span>
                  </div>

                  <Link to={`/movie/${movie.id}`} className="book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-movies">
            <h2>No Movies Found</h2>

            <p>Try searching for another movie or changing your filters.</p>
          </div>
        )}
        <div className="load-more-container">
          <button className="load-more-btn">Load More Movies</button>
        </div>
      </section>
    </div>
  );
}

export default Movies;
