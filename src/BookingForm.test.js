import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockProps = {
  availableTimes: ["17:00", "18:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

test("guests input has min and max validation", () => {
  render(<BookingForm {...mockProps} />);

  const guestsInput =
    screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("date input is required", () => {
  render(<BookingForm {...mockProps} />);

  const dateInput =
    screen.getByLabelText(/choose date/i);

  expect(dateInput).toHaveAttribute("required");
});

test("time input is required", () => {
  render(<BookingForm {...mockProps} />);

  const timeInput =
    screen.getByLabelText(/choose time/i);

  expect(timeInput).toHaveAttribute("required");
});

test("occasion input is required", () => {
  render(<BookingForm {...mockProps} />);

  const occasionInput =
    screen.getByLabelText(/occasion/i);

  expect(occasionInput).toHaveAttribute("required");
});