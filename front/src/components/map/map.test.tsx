import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Map from './map';
import apiService from '../../api-service';

const mockPublication = {
  stepTravel: [
    {
      id: 1,
      title: "Titre de l'étape 1",
      description: "Description de l'étape 1",
      address: "Adresse de l'étape 1",
      latitude: 48.8588443,
      longitude: 2.2943506,
      plus: "Avantages de l'étape 1",
      less: "Inconvénients de l'étape 1",
    },
    {
      id: 2,
      title: "Titre de l'étape 2",
      description: "Description de l'étape 2",
      address: "Adresse de l'étape 2",
      latitude: 48.8588443,
      longitude: 2.2943506,
      plus: "Avantages de l'étape 2",
      less: "Inconvénients de l'étape 2",
    },
  ],
};

const renderMap = () => {
  const getAllSpy = jest.spyOn(apiService.Publications, 'get');
  getAllSpy.mockResolvedValue(mockPublication);

  return render(
    <MemoryRouter initialEntries={['/map/1']}>
        <Routes>
          <Route path="/map/:id" element={<Map />} />
        </Routes>
      </MemoryRouter>
  )
}

describe('Map', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the map with markers when data is loaded', async () => {    
    renderMap();
  
    await waitFor(() => {
      expect(screen.getByTestId('map-container')).toBeInTheDocument();
    })

    // Vérifiez la présence des marqueurs sur la carte
    const markers = screen.getAllByRole('button', { name: 'Marker' }); // Assurez-vous que les marqueurs ont un rôle et un nom spécifiques
    expect(markers.length).toBe(mockPublication.stepTravel.length); // Assurez-vous que le nombre de marqueurs correspond au nombre d'étapes de voyage
  });
});