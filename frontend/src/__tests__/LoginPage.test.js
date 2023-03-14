import userEvent from "@testing-library/user-event";
import { render, screen, debug, getByAltText } from "@testing-library/react";
import LoginPage from '../pages/LoginPage';
import voyageurs from "../media/voyageurs.jpg";

test('renders login page', () => {
  render(<LoginPage />);

  const heading1 = screen.getByRole('heading', { name: /Welcome back!/i, level: 1 });
  const heading3 = screen.getByRole('heading',  {name : /Entrez vos informations afin de vous connecter/i, level : 3})

  const image = screen.getByAltText("Voyageurs Sur Une Colline")

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Mot de passe');
  const submitButton = screen.getByRole('button', { name: "S'identifier" });
  const notRegister = screen.getByText('Vous n’êtes pas inscrit ?');
  const registerLink =  screen.getByRole("link", { name: /Inscrivez-vous ici/i })


  expect(heading1).toBeInTheDocument();
  expect(heading3).toBeInTheDocument();

  expect(image).toHaveAttribute("src", voyageurs)

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(notRegister).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});