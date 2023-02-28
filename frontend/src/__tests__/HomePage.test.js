import { render, screen, debug, getByAltText } from "@testing-library/react";
import HomePage from '../pages/HomePage';
import { act } from "react-dom/test-utils";
import peaceValley from "../media/PeaceValley.jpg";
import airplane from "../media/Airplane.png";

test('render home page', () => {

    render(<HomePage />);

    const image = screen.getByAltText("Vallée Atmosphérique");
    const wlcmMessage = screen.getByRole('heading', {name : /Bienvenue sur Epic Road Trip, Planifiez vos voyages où découvrez ceux des autres !/i, level: 1});
    const plcSrchBar = screen.getByPlaceholderText('Où voulez-vous aller ?');
    const srchButton = screen.getByRole('button', {name: /Valider/i});
    const trvlMessage = screen.getByRole('heading', {name : /Voyage/i, level: 3});
    const logo = screen.getByTitle("trvlIcon");

    expect(wlcmMessage).toBeInTheDocument();
    expect(plcSrchBar).toBeInTheDocument();

    expect(image).toHaveAttribute("src", peaceValley)
    expect(logo).toBeInTheDocument();

    expect(srchButton).toBeInTheDocument();
    expect(trvlMessage).toBeInTheDocument();
})
test('click button', () => {

    render (<HomePage />);




})