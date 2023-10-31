import React from 'react';
import 'jest-localstorage-mock';
import { BrowserRouter } from 'react-router-dom';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Card from './card';

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

describe('<Card />', () => {
  it('should render a Card with the correct content', () => {
    renderComponent();

    expect(screen.getByText(cardProps.title)).toBeInTheDocument();
    expect(screen.getByText(cardProps.country)).toBeInTheDocument();
    expect(screen.getByAltText('voyage')).toBeInTheDocument(); // Texte alternatif de l'image
    expect(screen.getByAltText('profil')).toBeInTheDocument();
  });

  it('should open the ProfilModal when traveler picture is clicked', () => {
    renderComponent();

    const travelerPictureElement = screen.getByAltText('profil');
    fireEvent.click(travelerPictureElement);

    const modalElement = screen.getByText('Publications');
    expect(modalElement).toBeInTheDocument();
  });

  // it('should redirect to details page when clicked and user is authenticated', async () => {
  //   localStorage.setItem('apiToken', 'token value');
  //   renderComponent();

  //   const detailsLink = screen.getByRole('link', { name: /détails/i });
  //   fireEvent.click(detailsLink);

  //   // Attendez que l'élément sur la page de détails soit présent
  //   const detailsPageHeader = await screen.findByText('Détails du voyage');
  //   expect(detailsPageHeader).toBeInTheDocument();

  //   await waitFor(() => {
  //     expect(screen.getByRole('link', { name: /détails/i })).toBeInTheDocument();
  //   })
  // fireEvent.click(detailsLink);

  // Ajoutez ici les assertions pour vérifier la redirection vers la page de détails
  // });

  // it('should redirect to inscription page when clicked and user is not authenticated', () => {
  //   // Mocking localStorage to simulate unauthenticated user
  //   Storage.prototype.getItem = jest.fn(() => null);

  //   render(<Card {...cardProps} />);

  //   const inscriptionLink = screen.getByRole('link', { name: /inscription/i });
  //   fireEvent.click(inscriptionLink);

  //   // Ajoutez ici les assertions pour vérifier la redirection vers la page d'inscription
  // });
});
