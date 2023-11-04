import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

// Mocking localStorage for the test
Storage.prototype.getItem = jest.fn(() => 'your_mocked_token');

const cardProps = {
  id: 1,
  country: 'France',
  picture: 'example.jpg',
  title: 'Exemple de voyage',
  travelerPicture: 'traveler.jpg',
};

const renderComponent = (props = cardProps) => {
  render(
    // Besoin de wrapper le composant à tester avec un BrowserRouter, car Card utilise Link, un composant de react-router-dom
    <BrowserRouter>
      <Card {...props} />
    </BrowserRouter>
  )
}

describe('Card', () => {
  it('should render a Card with the correct content', () => {
    renderComponent();

    expect(screen.getByText(cardProps.title)).toBeInTheDocument();
    expect(screen.getByText(cardProps.country)).toBeInTheDocument();
    expect(screen.getByAltText('voyage')).toBeInTheDocument(); // Texte alternatif de l'image
    expect(screen.getByAltText('profil')).toBeInTheDocument();
  });

  it('should open the ProfilModal when traveler picture is clicked', () => {
    renderComponent();

    fireEvent.click(screen.getByAltText('profil'));
    expect(screen.getByText('Publications')).toBeInTheDocument();
  });
});