import { render, screen, debug, getByAltText } from "@testing-library/react";
import Itineraire from '../pages/ItinerairesPage';

test('render itin page', () => {

    render(<Itineraire/>);

    const itinMsg = screen.getByRole('heading', {name : /Itinéraires/i, level: 1});
})