
import { Link } from "react-router-dom";
import { FaTicketAlt, FaClock, FaShieldAlt } from "react-icons/fa";

import movies from "../data/movies";

function Home() {
  const nowShowing = movies.slice(0, 4);
  const comingSoon = movies.slice(4, 8);

  return (
    <main className="home">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-subtitle">
            WELCOME TO CINEBOOK
          </p>

          <h1>
            Your Movie.
            <br />
            Your Seat.
            <br />
            Your Experience.
          </h1>

          <p className="hero-description">
            Discover the latest movies, choose your favorite seats,
            and book your tickets in just a few clicks.
          </p>

          <Link to="/movies" className="hero-btn">
            Browse Movies
          </Link>

        </div>

      </section>


      {/* ================= NOW SHOWING ================= */}

      <section className="movie-section">

        <div className="section-header">

          <div>
            <p className="section-subtitle">
              WATCH NOW
            </p>

            <h2>
              Now Showing
            </h2>
          </div>

          <Link
            to="/movies"
            className="view-all"
          >
            View All →
          </Link>

        </div>


        <div className="movie-grid">

          {nowShowing.map((movie) => (

            <div
              className="movie-card"
              key={movie.id}
            >

              <div className="poster-container">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-poster"
                />

                <div className="rating">
                  ⭐ {movie.rating}
                </div>

              </div>


              <div className="movie-info">

                <h3>
                  {movie.title}
                </h3>

                <p>
                  {movie.genre}
                </p>

                <div className="movie-meta">

                  <span>
                    {movie.language}
                  </span>

                  <span>
                    {movie.duration}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= OFFERS ================= */}

      <section className="offers-section">

        <div className="section-header">

          <div>
            <p className="section-subtitle">
              SPECIAL OFFERS
            </p>

            <h2>
              Book More, Save More
            </h2>
          </div>

        </div>


        <div className="offers-grid">

          {/* Offer 1 */}

          <div className="offer-card">

            <div className="offer-icon">
              🎟️
            </div>

            <div>
              <h3>
                First Booking
              </h3>

              <p>
                Get 20% OFF on your first movie booking.
              </p>

              <span className="offer-code">
                CINE20
              </span>
            </div>

          </div>


          {/* Offer 2 */}

          <div className="offer-card">

            <div className="offer-icon">
              🍿
            </div>

            <div>
              <h3>
                Weekend Offer
              </h3>

              <p>
                Get ₹100 OFF on weekend movie bookings.
              </p>

              <span className="offer-code">
                WEEKEND100
              </span>
            </div>

          </div>


          {/* Offer 3 */}

          <div className="offer-card">

            <div className="offer-icon">
              ⭐
            </div>

            <div>
              <h3>
                Movie Lovers
              </h3>

              <p>
                Book 3 tickets and get ₹150 OFF.
              </p>

              <span className="offer-code">
                MOVIE150
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= COMING SOON ================= */}

      <section className="coming-section">

        <div className="section-header">

          <div>

            <p className="section-subtitle">
              COMING SOON
            </p>

            <h2>
              Upcoming Movies
            </h2>

          </div>

          <Link
            to="/movies"
            className="view-all"
          >
            View All →
          </Link>

        </div>


        <div className="movie-grid">

          {comingSoon.map((movie) => (

            <div
              className="movie-card"
              key={movie.id}
            >

              <div className="poster-container">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-poster"
                />

                <div className="coming-label">
                  Coming Soon
                </div>

              </div>


              <div className="movie-info">

                <h3>
                  {movie.title}
                </h3>

                <p>
                  {movie.genre}
                </p>

                <div className="movie-meta">

                  <span>
                    {movie.language}
                  </span>

                  <span>
                    {movie.duration}
                  </span>

                </div>


                <Link
                  to={`/movie/${movie.id}`}
                  className="details-btn"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY CINEBOOK ================= */}

      <section className="why-section">

        <div className="section-header center-header">

          <div>

            <p className="section-subtitle">
              WHY CINEBOOK
            </p>

            <h2>
              Simple. Fast. Easy.
            </h2>

          </div>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <FaTicketAlt />

            <h3>
              Easy Booking
            </h3>

            <p>
              Book your movie tickets in just a few clicks.
            </p>

          </div>


          <div className="why-card">

            <FaClock />

            <h3>
              Save Your Time
            </h3>

            <p>
              Find movies, showtimes and seats quickly.
            </p>

          </div>


          <div className="why-card">

            <FaShieldAlt />

            <h3>
              Secure Payment
            </h3>

            <p>
              Simple and secure payment experience.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div>

          <h2>
            Ready for your next movie?
          </h2>

          <p>
            Find your movie and book your favorite seat today.
          </p>

        </div>


        <Link
          to="/movies"
          className="hero-btn"
        >
          Explore Movies
        </Link>

      </section>




    </main>
  );
}

export default Home;

