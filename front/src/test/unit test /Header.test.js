import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from '../../Components/header/Header';


describe("<Header />", () => {
    
    test('It should render the header logo', () =>{
        render(  
        <Router>
          <Header />
          </Router>
          );
          const logo = screen.getByRole('img');
          expect(logo).toHaveAttribute('src', 'Triplink_min.png');
          expect(logo).toHaveAttribute('alt', 'Logo Triplink');
    });

    test('It should render the header title', () =>{
        render(  
        <Router>
          <Header />
          </Router>
          );
          expect(screen.getByText("Triplink")).toBeInTheDocument();
    });

    test('It should render button named Se connecter and click on it', async () =>{
        render(  
        <Router>
          <Header />
          </Router>
          );
          expect(screen.getByText("Triplink")).toBeInTheDocument();
          await userEvent.click(screen.getByRole('button'), {name: /Se connecter/i});
          await waitFor(() => {
            expect(getByText('Bienvenue sur Triplink')).toBeInTheDocument()
          });
    });

});