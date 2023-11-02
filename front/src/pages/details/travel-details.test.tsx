import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TravelDetails from './travel-details';
import apiService from '../../api-service';

describe('TravelDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading component while data is being fetched', () => {
    render(
      <MemoryRouter initialEntries={['/travel/1']}>
        <Route path="/travel/:id">
          <TravelDetails />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should toggle the menu when the menu button is clicked', async () => {
    const mockPublication = {
      createdAt: "2023-10-26T10:00:00Z",
      travelPartner: {
        id: 1,
        partnerFR: "Partenaire de voyage FR",
        partnerEN: "Travel Partner EN",
      },
      description: "Description de la publication",
      travelType: {
        id: 1,
        categoryFr: "Aventure",
        categoryEn: "Adventure",
      },
      bagTips: "Conseils pour le sac",
      id: "1",
      traveler: {
        picture: "lien_de_l'image",
        username: "Nom de l'utilisateur",
      },
      budget: 3,
    };

    const getAllSpy = jest.spyOn(apiService.Publications, 'get');
    getAllSpy.mockResolvedValue([mockPublication]);

    render(
      <MemoryRouter initialEntries={['/travel/1']}>
        <Route path="/travel/:id">
          <TravelDetails />
        </Route>
      </MemoryRouter>
    );

    // Vérifiez que le menu est initialement fermé
    expect(screen.getByText('Suivre')).not.toBeVisible();
    expect(screen.getByText('Contacter')).not.toBeVisible();
    expect(screen.getByText('Favoris')).not.toBeVisible();

    // Cliquez sur le bouton du menu
    fireEvent.click(screen.getByRole('button', { name: 'Toggle Menu' }));

    // Vérifiez que le menu est maintenant ouvert
    expect(screen.getByText('Suivre')).toBeVisible();
    expect(screen.getByText('Contacter')).toBeVisible();
    expect(screen.getByText('Favoris')).toBeVisible();
  });
});
