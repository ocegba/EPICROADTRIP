import { render, screen, debug } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders home page", () => {
  render(<App />);
  const pageTitle = screen.getByText('EPIC ROAD TRIP');
  expect(pageTitle).toBeInTheDocument();

  const homePageTitle = screen.queryAllByText(/Page d'accueil/i);
  expect(homePageTitle.length).toBeGreaterThan(0);
});

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