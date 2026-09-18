import { Link, useParams } from "react-router-dom";
import moviesData from "../data/moviesData";
import movies from "../data/movies";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const movie = moviesData.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="movie-not-found">
        <h2>Movie Not Found</h2>

        <Link to="/movies" className="back-btn">
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="movie-details-page">

      <section className="movie-details-container">

        <div className="details-poster">
          <img
            src={movie.image}
            alt={movie.title}
          />
        </div>

        <div className="details-content">

          <p className="details-subtitle">
            CINEBOOK
          </p>

          <h1>{movie.title}</h1>

          <div className="details-rating">
            ⭐ {movie.rating} / 10
          </div>

          <p className="details-genre">
            {movie.genre}
          </p>

          <p className="details-description">
            Experience {movie.title} on the big screen.
            Book your tickets and enjoy an unforgettable
            movie experience with CineBook.
          </p>

          <div className="details-info">

            <div className="info-item">
              <span>Release Date</span>
              <strong>{movie.releaseDate}</strong>
            </div>

            <div className="info-item">
              <span>Duration</span>
              <strong>{movie.duration}</strong>
            </div>

            <div className="info-item">
              <span>Language</span>
              <strong>{movie.language}</strong>
            </div>

          </div>

          <div className="details-actions">

            <Link
              to={`/showtime/${movie.id}`}
              className="details-book-btn"
            >
              Book Tickets
            </Link>

            <Link
              to="/movies"
              className="back-movies-btn"
            >
              Back to Movies
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default MovieDetails;