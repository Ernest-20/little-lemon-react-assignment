import React from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <div className="booking-page">
      <h2>Reserve a Table 🍋</h2>
      <p>Please fill in the form below to book your table.</p>

      <BookingForm />

      <p>We look forward to serving you!</p>
    </div>
  );
}

export default BookingPage;