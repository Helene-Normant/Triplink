import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './cards';

// Mock de l'API Service pour simuler les données
jest.mock('../../apiService', () => ({
  Publications: {
    getAll: jest.fn(() => Promise.resolve([
      // Ajoutez ici des exemples de données de cartes simulées
    ])),
  },
}));

describe('<Cards />', () => {
  it('should render loading component while data is being fetched', () => {
    render(<Cards />);
    const loadingComponent = screen.getByText('Loading'); // Assurez-vous que cela correspond au texte de votre composant Loading
    expect(loadingComponent).toBeInTheDocument();
  });

  it('should render "PAS DE RESULTATS" when no cards match the filters', async () => {
    render(<Cards destination={{ id: 1, nameFr: 'France', nameEn: 'France' }} />);
    const noResultMessage = screen.getByText('PAS DE RESULTATS');
    expect(noResultMessage).toBeInTheDocument();
  });

  it('should render cards when data is loaded', async () => {
    // Ajoutez des données de cartes simulées pour correspondre à ce que vous attendez
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
      // Ajoutez d'autres exemples de données de cartes simulées ici
    ];

    // Remplacez le mock de l'API Service pour renvoyer les données simulées
    jest.spyOn(require('../../apiService'), 'Publications').mockReturnValue({
      getAll: jest.fn(() => Promise.resolve(mockCards)),
    });

    render(<Cards />);

    // Attendez que les cartes soient rendues
    const cardElements = await screen.findAllByRole('article');
    expect(cardElements).toHaveLength(mockCards.length);
  });
});
