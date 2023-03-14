import userEvent from "@testing-library/user-event";
import { render, screen, debug, getByAltText } from "@testing-library/react";
import Profil from '../pages/Profil';
import { act } from "react-dom/test-utils";

test('renders Profil page ====> Itinéraires', () => {
  render(<Profil />);

  const itnLink = screen.getByRole("button", { name: /Mes itinéraires/ });
  act(() => {
    userEvent.click(itnLink);
  });

  const heading1 = screen.getByRole('heading', { name: /Mes itinéraires/i, level: 1 });
  const heading3 = screen.getByRole('heading',  {name : /Dans cette section, vous pouvez supprimer, imprimer ou publier les itinéraires/i, level : 3})

  expect(heading1).toBeInTheDocument();
  expect(heading3).toBeInTheDocument();
});

test('renders Profil page ====> Réglages', () => {
    render(<Profil />);

    const regLink = screen.getByRole("button", { name: /Mes réglages/ });
    act(() => {
      userEvent.click(regLink);
    });

    const heading1 = screen.getByRole('heading', { name: /Mes réglages/i, level: 1 });
    const heading3 = screen.getByRole('heading',  {name : /Dans cette section, vous pouvez éditer votre profil/i, level : 3})

    const usrInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Mot de passe');

    const mdfButton = screen.getByRole('button', { name: "Modifier" });
    const dltButton = screen.getByRole('button', { name: "Supprimer mon compte" });


    expect(heading1).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(usrInput).toBeInTheDocument();

    expect(mdfButton).toBeInTheDocument();
    expect(dltButton).toBeInTheDocument();
  });