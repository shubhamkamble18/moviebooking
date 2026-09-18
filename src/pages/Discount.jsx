import { Link } from "react-router-dom";
import {
  FaPercent,
  FaTicketAlt,
  FaGift,
  FaTag,
} from "react-icons/fa";

import moviesData from "../data/moviesData";
import "./Discount.css";

function Discount() {
  const discounts = [
    {
      id: 1,
      movieId: 1,
      title: "Inception Special Offer",
      description:
        "Get 20% OFF on your Inception movie tickets.",
      discount: "20% OFF",
      code: "INCEPT20",
      minAmount: "₹300",
    },
    {
      id: 2,
      movieId: 2,
      title: "Dark Knight Deal",
      description:
        "Save ₹100 when booking The Dark Knight.",
      discount: "₹100 OFF",
      code: "DARK100",
      minAmount: "₹400",
    },
    {
      id: 3,
      movieId: 3,
      title: "Avengers Endgame Offer",
      description:
        "Get 15% OFF on Avengers: Endgame bookings.",
      discount: "15% OFF",
      code: "AVENGERS15",
      minAmount: "₹300",
    },
    {
      id: 4,
      movieId: 10,
      title: "3 Idiots Movie Deal",
      description:
        "Enjoy ₹75 OFF on your 3 Idiots ticket booking.",
      discount: "₹75 OFF",
      code: "IDIOTS75",
      minAmount: "₹250",
    },
    {
      id: 5,
      movieId: 14,
      title: "Kantara Special",
      description:
        "Get 10% OFF when you book Kantara tickets.",
      discount: "10% OFF",
      code: "KANTARA10",
      minAmount: "₹300",
    },
    {
      id: 6,
      movieId: 20,
      title: "Godfather Classic Deal",
      description:
        "Get ₹150 OFF on The Godfather booking.",
      discount: "₹150 OFF",
      code: "GODFATHER150",
      minAmount: "₹500",
    },
  ];

  return (
    <div className="discount-page">

      {/* Header */}

      <div className="discount-header">

        <p>CINEBOOK</p>

        <h1>Movie Discounts</h1>

        <span>
          Save more on your favorite movies
        </span>

      </div>

      {/* Top Offer */}

      <section className="discount-banner">

        <div className="banner-icon">
          <FaPercent />
        </div>

        <div className="banner-content">

          <p>LIMITED TIME OFFER</p>

          <h2>
            More Movies. More Savings.
          </h2>

          <span>
            Grab exciting offers and enjoy your favorite
            movies at a lower price.
          </span>

        </div>

        <Link
          to="/movies"
          className="banner-btn"
        >
          Browse Movies
        </Link>

      </section>

      {/* Discount Cards */}

      <section className="discount-section">

        <div className="discount-section-header">

          <div>
            <p>AVAILABLE OFFERS</p>

            <h2>
              Choose Your Discount
            </h2>
          </div>

          <FaGift />

        </div>

        <div className="discount-grid">

          {discounts.map((discount) => {

            const movie = moviesData.find(
              (item) =>
                item.id === discount.movieId
            );

            return (
              <div
                className="discount-card"
                key={discount.id}
              >

                {/* Movie */}

                <div className="discount-movie">

                  <img
                    src={movie.image}
                    alt={movie.title}
                  />

                  <div>

                    <span>Movie Offer</span>

                    <h3>
                      {movie.title}
                    </h3>

                    <p>
                      {movie.language} •{" "}
                      {movie.year}
                    </p>

                  </div>

                </div>

                {/* Discount */}

                <div className="discount-value">
                  {discount.discount}
                </div>

                <p className="discount-description">
                  {discount.description}
                </p>

                {/* Minimum */}

                <div className="discount-min">

                  <span>
                    Minimum booking
                  </span>

                  <strong>
                    {discount.minAmount}
                  </strong>

                </div>

                {/* Code */}

                <div className="discount-code">

                  <div>
                    <FaTag />

                    <span>
                      {discount.code}
                    </span>
                  </div>

                  <span>
                    Promo Code
                  </span>

                </div>

                {/* Button */}

                <Link
                  to={`/movie/${movie.id}`}
                  className="discount-book-btn"
                >
                  Book Movie
                </Link>

              </div>
            );
          })}

        </div>

      </section>

      {/* General Offers */}

      <section className="general-offers">

        <div className="general-offer">

          <FaTicketAlt />

          <div>
            <h3>
              First Booking
            </h3>

            <p>
              Get 20% OFF on your first booking.
            </p>
          </div>

        </div>

        <div className="general-offer">

          <FaGift />

          <div>
            <h3>
              Weekend Special
            </h3>

            <p>
              Get ₹100 OFF on weekend bookings.
            </p>
          </div>

        </div>

        <div className="general-offer">

          <FaPercent />

          <div>
            <h3>
              Group Booking
            </h3>

            <p>
              Book 3 or more tickets and save ₹150.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Discount;