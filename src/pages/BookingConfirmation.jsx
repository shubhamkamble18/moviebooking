import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaFilm,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaChair,
  FaTicketAlt,
} from "react-icons/fa";

import "./BookingConfirmation.css";

function BookingConfirmation() {
  const booking = {
    bookingId: "CB20260916001",
    movie: "Inception",
    cinema: "PVR Cinemas",
    location: "Kalyan",
    date: "16 September 2026",
    time: "8:30 PM",
    seats: "A5",
    tickets: 1,
    amount: 205,
  };

  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        {/* Success */}

        <div className="success-section">
          <FaCheckCircle className="success-icon" />

          <h1>Booking Confirmed!</h1>

          <p>
            Your movie tickets have been booked successfully.
          </p>
        </div>

        {/* Booking ID */}

        <div className="booking-id">
          <span>Booking ID</span>

          <strong>{booking.bookingId}</strong>
        </div>

        {/* Movie */}

        <div className="confirmation-movie">

          <div className="movie-icon">
            <FaFilm />
          </div>

          <div>
            <span>Movie</span>
            <h2>{booking.movie}</h2>
          </div>

        </div>

        {/* Booking Details */}

        <div className="booking-details">

          <div className="confirmation-item">
            <FaMapMarkerAlt />

            <div>
              <span>Cinema</span>
              <strong>{booking.cinema}</strong>
              <small>{booking.location}</small>
            </div>
          </div>

          <div className="confirmation-item">
            <FaCalendarAlt />

            <div>
              <span>Date</span>
              <strong>{booking.date}</strong>
            </div>
          </div>

          <div className="confirmation-item">
            <FaClock />

            <div>
              <span>Showtime</span>
              <strong>{booking.time}</strong>
            </div>
          </div>

          <div className="confirmation-item">
            <FaChair />

            <div>
              <span>Seat</span>
              <strong>{booking.seats}</strong>
            </div>
          </div>

        </div>

        {/* Payment */}

        <div className="payment-summary">

          <div>
            <span>Tickets</span>
            <strong>
              {booking.tickets} × ₹180
            </strong>
          </div>

          <div>
            <span>Convenience Fee</span>
            <strong>₹25</strong>
          </div>

          <div className="total-row">
            <span>Total Paid</span>
            <strong>₹{booking.amount}</strong>
          </div>

        </div>

        {/* Ticket Message */}

        <div className="ticket-message">

          <FaTicketAlt />

          <p>
            Please arrive at the cinema at least 15 minutes
            before the show starts.
          </p>

        </div>

        {/* Actions */}

        <div className="confirmation-actions">

          <Link
            to="/bookings"
            className="primary-confirmation-btn"
          >
            My Bookings
          </Link>

          <Link
            to="/movies"
            className="secondary-confirmation-btn"
          >
            Browse More Movies
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BookingConfirmation;