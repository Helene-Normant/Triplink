import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TravelDetail from './travel-details';

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

describe('<TravelDetail />', () => {
  it('should render loading component while data is being fetched', () => {
    render(
      <MemoryRouter initialEntries={['/travel/1']}>
        <Route path="/travel/:id">
          <TravelDetail />
        </Route>
      </MemoryRouter>
    );

    const loadingComponent = screen.getByText('Loading'); // Assurez-vous que cela correspond au texte de votre composant Loading
    expect(loadingComponent).toBeInTheDocument();
  });

  it('should toggle the menu when the menu button is clicked', async () => {
    // Ajoutez des données de publication simulées
    const mockPublication = {
      // Ajoutez ici des exemples de données de publication simulées
    };

    // Remplacez le mock de l'API Service pour renvoyer la publication simulée
    jest.spyOn(require('../../apiService'), 'Publications').mockReturnValue({
      get: jest.fn(() => Promise.resolve(mockPublication)),
    });

    render(
      <MemoryRouter initialEntries={['/travel/1']}>
        <Route path="/travel/:id">
          <TravelDetail />
        </Route>
      </MemoryRouter>
    );

    const menuButton = screen.getByRole('button', { name: 'Toggle Menu' });

    // Vérifiez que le menu est initialement fermé
    expect(screen.getByText('Suivre')).not.toBeVisible();
    expect(screen.getByText('Contacter')).not.toBeVisible();
    expect(screen.getByText('Favoris')).not.toBeVisible();

    // Cliquez sur le bouton du menu
    fireEvent.click(menuButton);

    // Vérifiez que le menu est maintenant ouvert
    expect(screen.getByText('Suivre')).toBeVisible();
    expect(screen.getByText('Contacter')).toBeVisible();
    expect(screen.getByText('Favoris')).toBeVisible();
  });
});
