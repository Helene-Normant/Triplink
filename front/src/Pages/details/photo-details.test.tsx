import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PhotoDetail from './photo-details';

// Mock de l'API Service pour simuler les données
jest.mock('../../apiService', () => ({
  Publications: {
    get: jest.fn(() => Promise.resolve({
      // Ajoutez ici des exemples de données de publication simulées
    })),
  },
}));

// Mock de useParams pour fournir un ID de publication simulé
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }), // Remplacez '1' par l'ID de la publication simulée
}));

describe('<PhotoDetail />', () => {
  it('should render loading component while data is being fetched', () => {
    render(
      <MemoryRouter initialEntries={['/photo/1']}>
        <Route path="/photo/:id">
          <PhotoDetail />
        </Route>
      </MemoryRouter>
    );

    const loadingComponent = screen.getByText('Loading'); // Assurez-vous que cela correspond au texte de votre composant Loading
    expect(loadingComponent).toBeInTheDocument();
  });

  it('should navigate to next and previous images when buttons are clicked', async () => {
    // Ajoutez des données de publication simulées avec plusieurs images
    const mockPublication = {
      id: '1',
      country: { id: 1, nameFr: 'France' },
      picture: 'image1.jpg,image2.jpg,image3.jpg',
    };

    // Remplacez le mock de l'API Service pour renvoyer la publication simulée
    jest.spyOn(require('../../apiService'), 'Publications').mockReturnValue({
      get: jest.fn(() => Promise.resolve(mockPublication)),
    });

    render(
      <MemoryRouter initialEntries={['/photo/1']}>
        <Route path="/photo/:id">
          <PhotoDetail />
        </Route>
      </MemoryRouter>
    );

    const prevButton = screen.getByRole('button', { name: 'Previous' });
    const nextButton = screen.getByRole('button', { name: 'Next' });

    // Vérifiez que la première image est affichée initialement
    expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image1.jpg');

    // Cliquez sur le bouton Next
    fireEvent.click(nextButton);

    // Vérifiez que la deuxième image est affichée
    expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image2.jpg');

    // Cliquez sur le bouton Previous
    fireEvent.click(prevButton);

    // Vérifiez que la première image est à nouveau affichée
    expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image1.jpg');
  });
});
