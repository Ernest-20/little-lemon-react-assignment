import React, { useState } from "react";

function BookingForm({ availableTimes,
     dispatch,
     submitForm,
    }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    setDate(e.target.value);

    // REQUIRED: dispatch reducer action
    dispatch({ type: "UPDATE_TIMES",
         payload: e.target.value,
 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if(!date) formErrors.date = "Date is required";
    if(!time) formErrors.time = "Time is required";
    if(guests < 1 || guests > 10) formErrors.guests = "Guests must be between 1 and 10";
    if(!occasion) formErrors.occasion = "Occasion is required";

    setErrors(formErrors);
    if(Object.keys(formErrors).length > 0) return;
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);

  };
  const isFormValid =
  date &&
  time &&
  guests >=1 &&
  guests <=10 &&
  occasion;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >

      {/* DATE */}
      <label htmlFor="res-date">Choose date</label>
<input
  id="res-date"
  type="date"
  value={date}
  onChange={handleDateChange}
  required
/>

      {errors.date && <p className="error">{errors.date}</p>}

      {/* TIME */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      {/* OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        {errors.occasion && <p className="error">{errors.occasion}</p>}
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

        <input
  type="submit"
  value="Make Your reservation"
  disabled={!isFormValid}
  aria-label= "On Click"
/>
    </form>
  );
}

export default BookingForm;