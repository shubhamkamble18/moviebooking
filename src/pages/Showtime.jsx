import { Link, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import moviesData from "../data/moviesData";
import "./Showtime.css";

function Showtime() {
  const { id } = useParams();

  const movie = moviesData.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="showtime-not-found">
        <h2>Movie Not Found</h2>

        <Link to="/movies" className="showtime-back-btn">
          Back to Movies
        </Link>
      </div>
    );
  }

  const cinemas = [
    {
      id: 1,
      name: "PVR Cinemas",
      location: "Kalyan",
      times: ["10:30 AM", "1:45 PM", "5:00 PM", "8:30 PM"],
    },
    {
      id: 2,
      name: "INOX",
      location: "Dombivli",
      times: ["11:00 AM", "2:15 PM", "6:00 PM", "9:15 PM"],
    },
    {
      id: 3,
      name: "Cinepolis",
      location: "Thane",
      times: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM"],
    },
  ];

  return (
    <div className="showtime-page">

      {/* Header */}
      <div className="showtime-header">
        <p>CINEBOOK</p>

        <h1>Select Showtime</h1>

        <span>
          Choose your cinema and preferred showtime
        </span>
      </div>

      {/* Movie Info */}
      <section className="selected-movie">

        <img
          src={movie.image}
          alt={movie.title}
        />

        <div className="selected-movie-info">

          <h2>{movie.title}</h2>

          <div className="selected-movie-meta">
            <span>⭐ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span>{movie.language}</span>
          </div>

          <p>{movie.genre}</p>

        </div>

      </section>

      {/* Date Selection */}
      <section className="date-section">

        <h2>Select Date</h2>

        <div className="date-list">

          <button className="date-btn active">
            <strong>16</strong>
            <span>Today</span>
          </button>

          <button className="date-btn">
            <strong>17</strong>
            <span>Thu</span>
          </button>

          <button className="date-btn">
            <strong>18</strong>
            <span>Fri</span>
          </button>

          <button className="date-btn">
            <strong>19</strong>
            <span>Sat</span>
          </button>

          <button className="date-btn">
            <strong>20</strong>
            <span>Sun</span>
          </button>

        </div>

      </section>

      {/* Cinema & Showtime */}
      <section className="cinema-section">

        <h2>Available Cinemas</h2>

        <div className="cinema-list">

          {cinemas.map((cinema) => (

            <div className="cinema-card" key={cinema.id}>

              <div className="cinema-info">

                <h3>{cinema.name}</h3>

                <p>
                  <FaMapMarkerAlt />
                  {cinema.location}
                </p>

              </div>

              <div className="showtimes">

                {cinema.times.map((time) => (

                  <Link
                    to="/payment"
                    className="showtime-btn"
                    key={time}
                  >
                    <FaClock />
                    {time}
                  </Link>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Back Button */}
      <div className="showtime-footer">

        <Link
          to={`/movie/${movie.id}`}
          className="back-movie-btn"
        >
          ← Back to Movie
        </Link>

      </div>

    </div>
  );
}

export default Showtime;