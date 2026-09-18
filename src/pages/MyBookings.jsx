import { Link } from "react-router-dom";
import {
  FaTicketAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaChair,
} from "react-icons/fa";
import moviesData from "../data/moviesData";

import "./MyBookings.css";

function MyBookings() {
  const bookings = [
    {
      id: "CB20260916001",
      movie: "Inception",
      cinema: "PVR Cinemas",
      location: "Kalyan",
      date: "16 September 2026",
      time: "8:30 PM",
      seat: "A5",
      tickets: 1,
      amount: 205,
      status: "Confirmed",
    },
    {
      id: "CB20260915002",
      movie: "The Dark Knight",
      cinema: "INOX",
      location: "Dombivli",
      date: "15 September 2026",
      time: "6:00 PM",
      seat: "B4",
      tickets: 1,
      amount: 205,
      status: "Confirmed",
    },
  ];

  return (
    <div className="bookings-page">

      {/* Header */}

      <div className="bookings-header">
        <p>CINEBOOK</p>

        <h1>My Bookings</h1>

        <span>
          View your movie tickets and booking details
        </span>
      </div>

      {/* Booking List */}

      {bookings.length > 0 ? (
        <div className="bookings-list">

          {bookings.map((booking) => (

            <div className="booking-card" key={booking.id}>

              {/* Booking Top */}

              <div className="booking-top">

                <div className="booking-movie">

                  <div className="booking-icon">
                    <FaTicketAlt />
                  </div>

                  <div>
                    <span>Movie</span>
                    <h2>{booking.movie}</h2>
                  </div>

                </div>

                <div className="booking-status">
                  {booking.status}
                </div>

              </div>

              {/* Booking Details */}

              <div className="booking-info">

                <div className="booking-info-item">
                  <FaMapMarkerAlt />

                  <div>
                    <span>Cinema</span>
                    <strong>{booking.cinema}</strong>
                    <small>{booking.location}</small>
                  </div>
                </div>

                <div className="booking-info-item">
                  <FaCalendarAlt />

                  <div>
                    <span>Date</span>
                    <strong>{booking.date}</strong>
                  </div>
                </div>

                <div className="booking-info-item">
                  <FaClock />

                  <div>
                    <span>Showtime</span>
                    <strong>{booking.time}</strong>
                  </div>
                </div>

                <div className="booking-info-item">
                  <FaChair />

                  <div>
                    <span>Seat</span>
                    <strong>{booking.seat}</strong>
                  </div>
                </div>

              </div>

              {/* Booking Bottom */}

              <div className="booking-bottom">

                <div className="booking-id">
                  <span>Booking ID</span>
                  <strong>{booking.id}</strong>
                </div>

                <div className="booking-price">
                  <span>Total Paid</span>
                  <strong>₹{booking.amount}</strong>
                </div>

              </div>

            </div>

          ))}

        </div>
      ) : (

        /* No Bookings */

        <div className="no-bookings">

          <div className="no-bookings-icon">
            <FaTicketAlt />
          </div>

          <h2>No Bookings Yet</h2>

          <p>
            You haven't booked any movie tickets yet.
          </p>

          <Link
            to="/movies"
            className="browse-movies-btn"
          >
            Browse Movies
          </Link>

        </div>

      )}

    </div>
  );
}

export default MyBookings;