import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import TravelDetail from '../../Components/details/TravelDetail';
import apiService from '../../apiService';

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

const renderComponent = ({ publication = mockPublication } = {}) => {
  const getAllSpy = jest.spyOn(apiService.Publications, 'get');
  getAllSpy.mockResolvedValue(publication);

  return render(
    <MemoryRouter initialEntries={['/travel/1']}>
      <Routes>
        <Route path="/travel/:id" element={<TravelDetail />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('TravelDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render nothing when details are null', () => {
    renderComponent({ publication: undefined });

    expect(screen.queryByTestId('traveler-details')).not.toBeInTheDocument();
  });

  it('should toggle the menu when the menu button is clicked', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('traveler-details')).toBeInTheDocument();
    })

    // Vérifiez que le menu est initialement fermé
    const menu = screen.getByTestId('contact-items');
    expect(menu).toHaveClass('contact-items');
    expect(menu).not.toHaveClass('open');

    // Cliquez sur le bouton du menu
    fireEvent.click(screen.getByRole('button', { name: '. . .' }));
    expect(menu).toHaveClass('contact-items open');

    // Vérifiez que le menu est maintenant ouvert
    expect(screen.getByText('Suivre')).toBeVisible();
    expect(screen.getByText('Contacter')).toBeVisible();
    expect(screen.getByText('Favoris')).toBeVisible();
  });
});