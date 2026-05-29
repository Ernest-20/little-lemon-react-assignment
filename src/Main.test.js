import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "./api";

test("initializeTimes returns API times for today", () => {
  const result = initializeTimes();

  expect(result).toEqual(fetchAPI(new Date()));
});

test("updateTimes returns API times for selected date", () => {
  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    payload: "2026-01-01"
  };

  const result = updateTimes(state, action);

  expect(result).toEqual(fetchAPI(new Date(action.payload)));
});