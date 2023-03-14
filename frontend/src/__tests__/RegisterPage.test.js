import userEvent from "@testing-library/user-event";
import { render, screen, debug, getByAltText } from "@testing-library/react";
import RegisterPage from '../pages/RegisterPage';
import voyageurs from "../media/voyageurs.jpg";

test('renders register page', () => {
  render(<RegisterPage />);

  const heading1 = screen.getByRole('heading', { name: /Welcome/i, level: 1 });
  const heading3 = screen.getByRole('heading',  {name : /Entrez vos informations afin de vous inscrire/i, level : 3})

  const image = screen.getByAltText("Voyageurs Sur Une Colline")

  const userInput = screen.getByLabelText('Username');
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Mot de passe');
  const submitButton = screen.getByRole('button', { name: "S'inscrire" });

  const notRegister = screen.getByText('Vous êtes déjà inscrit ?');
  const registerLink =  screen.getByRole("link", { name: /Identifiez-vous ici/i })


  expect(heading1).toBeInTheDocument();
  expect(heading3).toBeInTheDocument();

  expect(image).toHaveAttribute("src", voyageurs)

  expect(userInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  expect(submitButton).toBeInTheDocument();
  expect(notRegister).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});