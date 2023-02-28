import userEvent from "@testing-library/user-event";
import { render, screen, debug, getByAltText } from "@testing-library/react";
import AdminPage from '../pages/AdminPage';
import { act } from "react-dom/test-utils";

test('renders Admin page ====> Adhérents', () => {
  render(<AdminPage />);

  const itnLink = screen.getByRole("button", { name: /Les adhérents/ });
  act(() => {
    userEvent.click(itnLink);
  });

  const heading1 = screen.getByRole('heading', { name: /Les adhérents/i, level: 1 });
  const heading3 = screen.getByRole('heading',  {name : /Dans cette section, vous pouvez supprimer les comptes des adhérents/i, level : 3})

  expect(heading1).toBeInTheDocument();
  expect(heading3).toBeInTheDocument();
});

test('renders Admin page ====> Les itinéraires', () => {
    render(<AdminPage />);

    const regLink = screen.getByRole("button", { name: /Les itinéraires/i });
    act(() => {
      userEvent.click(regLink);
    });

    const heading1 = screen.getByRole('heading', { name: /Les itinéraires/i, level: 1 });
    const heading3 = screen.getByRole('heading',  {name : /Dans cette section, vous pouvez supprimer les itinéraires publiés/i, level : 3})


    expect(heading1).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
  });