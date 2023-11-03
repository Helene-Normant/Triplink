// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Inscription from './inscription';
// import { MemoryRouter } from 'react-router-dom';

// test('renders Inscription component', () => {
//   render(
//     <MemoryRouter>
//       <Inscription />
//     </MemoryRouter>
//   );

//   expect(screen.getByText('Triplink')).toBeInTheDocument();
//   expect(screen.getByRole('annule')).toBeInTheDocument();
//   expect(screen.getByRole('inscrit')).toBeInTheDocument();
// });

// test('cancel button should navigate to home', () => {
//   const { getByRole, history } = render(
//     <MemoryRouter initialEntries={['/inscription']}>
//       <Inscription />
//     </MemoryRouter>
//   );

//   fireEvent.click(screen.getByRole('annule'));
//   expect(history.location.pathname).toBe('/');
// });
