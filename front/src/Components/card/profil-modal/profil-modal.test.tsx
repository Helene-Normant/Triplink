import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfilModal from './ProfilModal';

describe('ProfilModal', () => {
  it('should not render when "open" is false', () => {
    render(<ProfilModal isOpen={false} onClose={() => { }} />);

    expect(screen.queryByTestId('modal-profil-container')).toBeNull();
  });

  it('should render when "open" is true', () => {
    render(<ProfilModal isOpen={true} onClose={() => { }} />);

    expect(screen.getByTestId('modal-profil-container')).toBeInTheDocument();
  });

  it('should call "onClose" when clicked outside the modal', () => {
    const mockOnClose = jest.fn();
    render(<ProfilModal isOpen={true} onClose={mockOnClose} />);

    fireEvent.click(screen.getByTestId('modal-profil-container'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should render the profile data and follow button', () => {
    render(<ProfilModal isOpen={true} onClose={() => { }} />);

    expect(screen.getByTestId('modal-title-profil')).toBeInTheDocument();
    expect(screen.getByAltText('profil')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Publications')).toBeInTheDocument();
    expect(screen.getByText('Followers')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Suivre/i })).toBeInTheDocument();
  });
});