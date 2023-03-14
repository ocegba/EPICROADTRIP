import { render, screen, debug } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";


test("navigates to itineraires page", () => {
  render(<App />);
  const itinerairesLink = screen.getByRole("link", { name: "Itinéraires" });
  act(() => {
    userEvent.click(itinerairesLink);
  });
  expect(document.title).toBe("Itinéraires");
});

test("navigates to login page", () => {
  render(<App />);
  const itinerairesLink = screen.getByRole("link", { name: "Login" });
  act(() => {
    userEvent.click(itinerairesLink);
  });
  expect(document.title).toBe("S'identifier");
});