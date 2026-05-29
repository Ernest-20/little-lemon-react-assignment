import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";


/* 1. INITIAL TIMES */
export const initializeTimes = () => {
  return fetchAPI(new Date());
};

/* UPDATE TIMES USING SELECTED DATE */
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
  const success = submitAPI(formData);

  if (success) {
    navigate("/confirmed");
  }
};

  return (
    <main>
      <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
      />
    </main>
  );
}

export default Main;