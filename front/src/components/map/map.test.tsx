import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Map from './map';
import apiService from '../../api-service';

// // Mock de useParams pour fournir un ID de publication simulé
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useParams: () => ({ id: '1' }), // Remplacez '1' par l'ID de la publication simulée
// }));

describe('Map', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading component while data is being fetched', () => {
    render(
      <MemoryRouter initialEntries={['/map/1']}>
        <Route path="/map/:id">
          <Map />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should render the map with markers when data is loaded', async () => {
    const getAllSpy = jest.spyOn(apiService.Publications, 'getAll');
      const mockPublication = {
      // Ajoutez des exemples de données de publication simulées avec des étapes de voyage
      stepTravel: [
        // Ajoutez ici des données d'étapes de voyage simulées
      ],
    };
    getAllSpy.mockResolvedValue([mockPublication]);
    
    render(
      <MemoryRouter initialEntries={['/map/1']}>
        <Route path="/map/:id">
          <Map />
        </Route>
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.getByTestId('map-container')).toBeInTheDocument();
    })

    // Vérifiez la présence des marqueurs sur la carte
    const markers = screen.getAllByRole('img', { name: 'Marker' }); // Assurez-vous que les marqueurs ont un rôle et un nom spécifiques
    expect(markers.length).toBe(mockPublication.stepTravel.length); // Assurez-vous que le nombre de marqueurs correspond au nombre d'étapes de voyage
  });
});
