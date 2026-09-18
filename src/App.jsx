import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Showtime from "./pages/Showtime";
import Payment from "./pages/Payment";
import BookingConfirmation from "./pages/BookingConfirmation";
import MyBookings from "./pages/MyBookings";
import Login from "./pages/Login";
import Discount from "./pages/Discount";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/showtime/:id" element={<Showtime />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/discount" element={<Discount/>}/>
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation />}
        />
        <Route path="/bookings" element={<MyBookings />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;