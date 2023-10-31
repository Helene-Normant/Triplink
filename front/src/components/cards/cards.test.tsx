import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Cards from './cards';
import apiService from '../../api-service';
import { BrowserRouter } from 'react-router-dom';

describe('<Cards />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading component while data is being fetched', () => {
    render(<Cards />);
    // Le composant loading a un data-testid = 'loading', afin de pouvoir être testé
    const loadingComponent = screen.getByTestId('loading');
    expect(loadingComponent).toBeInTheDocument();
  });

  it('should render "PAS DE RESULTATS" when no cards match the filters', async () => {
    // Ici on utilise la méthode spyOn de jest, pour simuler la fonction que nous appelons à partir du composant Cards pour récupérer les données
    // spyOn prend 2 arguments : un module (ici apiService.Publications) et la méthode qu'on veut simuler (ici getAll)
    const getAllSpy = jest.spyOn(apiService.Publications, 'getAll');
    // On utilise ensuite la méthode mockResolvedValue de jest pour simuler le résultat de la fonction
    getAllSpy.mockResolvedValue([]);
    render(<Cards destination={{ id: 1, nameFr: 'Irak', nameEn: 'Irak' }} />);

    await waitFor(() => {
      expect(screen.getByText('PAS DE RESULTATS')).toBeInTheDocument();
    })
  });

  it('should render cards when data is loaded', async () => {
    const mockCards = [
      {
        id: 1,
        country: { id: 1, nameFr: 'France', nameEn: 'France' },
        travelType: 'Touristique',
        picture: 'image1.jpg',
        title: 'Exemple 1',
        photo: 'traveler1.jpg',
        profil: 'user1',
        traveler: { id: 1, username: 'user1', picture: 'user1.jpg' },
      },
    ];

    const getAllSpy = jest.spyOn(apiService.Publications, 'getAll');
    getAllSpy.mockResolvedValue(mockCards);

    render(
      <BrowserRouter>
        <Cards />
      </BrowserRouter>
    );

    // On attend que les cartes soient rendues
    const cardElements = await screen.findAllByRole('article');
    expect(cardElements).toHaveLength(mockCards.length);
  });
});

