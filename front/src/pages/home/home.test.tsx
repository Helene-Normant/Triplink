import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Home Component', () => {
  it('renders without errors', () => {
    render(<Home />);
    // Assert that the component renders without errors
  });

  it('displays the searchbar', () => {
    render(<Home />);
    const searchbarElement = screen.getByTestId('searchbar-component');
    expect(searchbarElement).toBeInTheDocument();
  });

  it('displays the cards', () => {
    render(<Home />);
    const cardsElement = screen.getByTestId('cards-component');
    expect(cardsElement).toBeInTheDocument();
  });

  it('displays the footer', () => {
    render(<Home />);
    const footerElement = screen.getByTestId('footer-component');
    expect(footerElement).toBeInTheDocument();
  });
});
