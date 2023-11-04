import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PhotoDetail from '../../Components/details/PhotoDetail';
import apiService from '../../apiService';

const publicationFixture = {
  id: 1,
  title: 'Title',
  description: 'description',
  country: { id: 1, nameFr: 'France' },
  budget: 1200,
  bagTips: 'bagTips',
  picture: 'image1.jpg,image2.jpg,image3.jpg',
}

const spyOnPublications = jest.spyOn(apiService.Publications, 'get');

const renderPhotoDetails = ({ publications = publicationFixture } = {}) => {
  spyOnPublications.mockResolvedValue(publications);

  return render(
    <MemoryRouter initialEntries={['/photo/1']}>
      <Routes>
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('PhotoDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render nothing when there is no photos', () => {
    renderPhotoDetails({ publications: undefined });

    expect(screen.queryByTestId('photo-details')).toBeNull();
  });

  it('should navigate to next and previous images when buttons are clicked', async () => {    
    renderPhotoDetails({ publications: publicationFixture })

    await waitFor(() => {
      expect(screen.getByTestId('photo-details')).toBeInTheDocument();
    })

    // Vérifiez que la première image est affichée initialement
    await expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image1.jpg');

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // Vérifiez que la deuxième image est affichée
    await expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image2.jpg');

    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));

    // Vérifiez que la première image est à nouveau affichée
    await expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image1.jpg');
  });
});