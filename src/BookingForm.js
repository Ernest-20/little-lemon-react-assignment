import React, { useState } from "react";

function BookingForm({ availableTimes,
     dispatch,
     submitForm,
    }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);

    // REQUIRED: dispatch reducer action
    dispatch({ type: "UPDATE_TIMES",
         payload: e.target.value,
 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);

  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >

      {/* DATE */}
      <label>Choose date</label>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
      />

      {/* TIME */}
      <label>Choose time</label>
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* GUESTS */}
      <label>Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      {/* OCCASION */}
      <label>Occasion</label>
      <select
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Reservation" />
    </form>
  );
}

export default BookingForm;