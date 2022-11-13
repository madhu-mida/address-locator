import { render, screen, cleanup } from "@testing-library/react"
import AddressResult from "../AddressResult"

afterEach(() => {
    cleanup()
})

const addressResult = {
    input: {
        street: '480 Laurie Ln',
        city: 'Thousand Oaks',
        state: 'CA',
        zip: '91360'
    },
    quadrant: 'SoutWest'
}

test('should render card component', () => {

    render(<AddressResult addressResult={addressResult} />);
    const cardElement = screen.getByTestId('el-card');
    expect(cardElement).toBeInTheDocument();
    const cardQuadElement = screen.getByTestId('el-quad');
    const cardStreetElement = screen.getByTestId('el-street');
    const cardCityStateElement = screen.getByTestId('el-city-state');
    const cardZipElement = screen.getByTestId('el-zip');
    expect(cardQuadElement).toBeInTheDocument();
    expect(cardStreetElement).toBeInTheDocument();
    expect(cardCityStateElement).toBeInTheDocument();
    expect(cardZipElement).toBeInTheDocument();
    expect(cardQuadElement).toHaveTextContent('SoutWest')
    expect(cardStreetElement).toHaveTextContent('480 Laurie Ln')
    expect(cardCityStateElement).toHaveTextContent('Thousand Oaks, CA')
    expect(cardZipElement).toHaveTextContent('91360')
})