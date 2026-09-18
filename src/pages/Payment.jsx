import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaLock,
  FaMobileAlt,
  FaWallet,
} from "react-icons/fa";

import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  const [error, setError] = useState("");

  const ticketPrice = 180;
  const convenienceFee = 25;
  const totalAmount = ticketPrice + convenienceFee;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (paymentMethod === "card") {
      if (
        !formData.cardName ||
        !formData.cardNumber ||
        !formData.expiry ||
        !formData.cvv
      ) {
        setError("Please fill in all card details.");
        return;
      }

      if (formData.cardNumber.length < 12) {
        setError("Please enter a valid card number.");
        return;
      }

      if (formData.cvv.length < 3) {
        setError("Please enter a valid CVV.");
        return;
      }
    }

    if (paymentMethod === "upi" && !formData.upiId) {
      setError("Please enter your UPI ID.");
      return;
    }

    // Fake payment success
    navigate("/booking-confirmation");
  };

  return (
    <div className="payment-page">

      {/* Header */}

      <div className="payment-header">
        <p>CINEBOOK</p>
        <h1>Complete Payment</h1>
        <span>Secure your movie tickets</span>
      </div>

      <div className="payment-container">

        {/* Payment Form */}

        <div className="payment-card">

          <div className="payment-card-header">
            <h2>Payment Method</h2>

            <div className="secure-payment">
              <FaLock />
              Secure Demo Payment
            </div>
          </div>

          {/* Payment Methods */}

          <div className="payment-methods">

            <button
              type="button"
              className={`payment-method ${
                paymentMethod === "card" ? "active" : ""
              }`}
              onClick={() => {
                setPaymentMethod("card");
                setError("");
              }}
            >
              <FaCreditCard />
              <span>Card</span>
            </button>

            <button
              type="button"
              className={`payment-method ${
                paymentMethod === "upi" ? "active" : ""
              }`}
              onClick={() => {
                setPaymentMethod("upi");
                setError("");
              }}
            >
              <FaMobileAlt />
              <span>UPI</span>
            </button>

            <button
              type="button"
              className={`payment-method ${
                paymentMethod === "wallet" ? "active" : ""
              }`}
              onClick={() => {
                setPaymentMethod("wallet");
                setError("");
              }}
            >
              <FaWallet />
              <span>Wallet</span>
            </button>

          </div>

          <form onSubmit={handlePayment}>

            {/* Card Payment */}

            {paymentMethod === "card" && (
              <div className="payment-form">

                <div className="input-group">
                  <label>Cardholder Name</label>

                  <input
                    type="text"
                    name="cardName"
                    placeholder="Enter cardholder name"
                    value={formData.cardName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Card Number</label>

                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-row">

                  <div className="input-group">
                    <label>Expiry Date</label>

                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      maxLength="5"
                      value={formData.expiry}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group">
                    <label>CVV</label>

                    <input
                      type="password"
                      name="cvv"
                      placeholder="123"
                      maxLength="3"
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                  </div>

                </div>

              </div>
            )}

            {/* UPI Payment */}

            {paymentMethod === "upi" && (
              <div className="payment-form">

                <div className="input-group">
                  <label>UPI ID</label>

                  <input
                    type="text"
                    name="upiId"
                    placeholder="example@upi"
                    value={formData.upiId}
                    onChange={handleChange}
                  />
                </div>


              </div>
            )}

            {/* Wallet */}

            {paymentMethod === "wallet" && (
              <div className="wallet-section">

                <div className="wallet-option">
                  <FaWallet />

                  <div>
                    <h3>CineBook Wallet</h3>
                    <p>Demo wallet payment</p>
                  </div>
                </div>


              </div>
            )}

            {error && (
              <p className="payment-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="pay-btn"
            >
              Pay ₹{totalAmount}
            </button>

          </form>

          <Link
            to="/movies"
            className="cancel-payment"
          >
            Cancel Payment
          </Link>

        </div>

        {/* Order Summary */}

        <div className="order-summary">

          <h2>Booking Summary</h2>

          <div className="summary-movie">

            <div className="summary-poster">
              🎬
            </div>

            <div>
              <h3>Movie Ticket</h3>
              <p>CineBook Movie Booking</p>
            </div>

          </div>

          <div className="summary-details">

            <div>
              <span>Tickets</span>
              <strong>1 × ₹{ticketPrice}</strong>
            </div>

            <div>
              <span>Convenience Fee</span>
              <strong>₹{convenienceFee}</strong>
            </div>

          </div>

          <div className="summary-total">

            <span>Total Amount</span>

            <strong>
              ₹{totalAmount}
            </strong>

          </div>

          <div className="demo-warning">
            <FaLock />

            <p>
              secure payment only. 
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Payment;