import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfilModal from './profil-modal';

describe('<ProfilModal />', () => {
  it('should not render when "open" is false', () => {
    render(<ProfilModal open={false} onClose={() => { }} />);

    const modalContainer = screen.queryByTestId('modal-profil-container');
    expect(modalContainer).toBeNull();
  });

  it('should render when "open" is true', () => {
    render(<ProfilModal open={true} onClose={() => { }} />);

    const modalContainer = screen.getByTestId('modal-profil-container');
    expect(modalContainer).toBeInTheDocument();
  });

  it('should call "onClose" when clicked outside the modal', () => {
    const mockOnClose = jest.fn();
    render(<ProfilModal open={true} onClose={mockOnClose} />);

    const modalContainer = screen.getByTestId('modal-profil-container');
    fireEvent.click(modalContainer);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should render the profile data and follow button', () => {
    render(<ProfilModal open={true} onClose={() => { }} />);

    const modalTitle = screen.getByTestId('modal-title-profil');
    const profileImage = screen.getByAltText('profil');
    const profileName = screen.getByText('Name');
    const publications = screen.getByText('Publications');
    const followers = screen.getByText('Followers');
    const followButton = screen.getByRole('button', { name: /Suivre/i });

    expect(modalTitle).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(publications).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(followButton).toBeInTheDocument();
  });
});
