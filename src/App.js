import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Booking Page */}
        <Route path="/" element={<Main />} />

        {/* Confirmation Page */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
