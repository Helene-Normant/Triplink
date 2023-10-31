import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Map from './map';

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

describe('<MapComponent />', () => {
  it('should render loading component while data is being fetched', () => {
    render(
      <MemoryRouter initialEntries={['/map/1']}>
        <Route path="/map/:id">
          <Map />
        </Route>
      </MemoryRouter>
    );

    const loadingComponent = screen.getByText('Loading'); // Assurez-vous que cela correspond au texte de votre composant Loading
    expect(loadingComponent).toBeInTheDocument();
  });

  it('should render the map with markers when data is loaded', async () => {
    // Ajoutez des données de publication simulées
    const mockPublication = {
      // Ajoutez ici des exemples de données de publication simulées avec des étapes de voyage
    };

    // Remplacez le mock de l'API Service pour renvoyer la publication simulée
    jest.spyOn(require('../../apiService'), 'Publications').mockReturnValue({
      get: jest.fn(() => Promise.resolve(mockPublication)),
    });

    render(
      <MemoryRouter initialEntries={['/map/1']}>
        <Route path="/map/:id">
          <Map />
        </Route>
      </MemoryRouter>
    );

    // Vérifiez que la carte est rendue
    const mapContainer = screen.getByTestId('map-container'); // Assurez-vous que le composant MapContainer a un attribut de test (data-testid)
    expect(mapContainer).toBeInTheDocument();

    // Vérifiez la présence des marqueurs sur la carte
    const markers = screen.getAllByRole('img', { name: 'Marker' }); // Assurez-vous que les marqueurs ont un rôle et un nom spécifiques
    expect(markers.length).toBe(mockPublication.stepTravel.length); // Assurez-vous que le nombre de marqueurs correspond au nombre d'étapes de voyage
  });
});
