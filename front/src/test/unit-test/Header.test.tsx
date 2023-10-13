import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../../Components/header/Header";
import Inscription from "../../Pages/inscription/Inscription";

describe("<Header />", () => {
  test("It should render the header logo", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "Triplink_min.png");
    expect(logo).toHaveAttribute("alt", "Logo Triplink");
  });

  test("It should render the header title", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("Triplink")).toBeInTheDocument();
  });

  test("It should render button named Se connecter and click on it", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("Se connecter")).toBeInTheDocument();
    await user.click(screen.getByRole("login"));
    await waitFor(() => {
      expect(screen.getByText("Bienvenue sur Triplink")).toBeInTheDocument();
    });
  });

  test('clicking on "S\'incrire" button redirects to Inscription page with correct text', () => {
   render(
    <Router>
    <Header />
    <Routes>
      <Route path="/inscription" element={<Inscription />} />
    </Routes>
  </Router>
);

fireEvent.click(screen.getByText("S'inscrire")); // Cliquer sur le bouton "S'inscrire"

(element : HTMLElement ) => {
  const hasText = (node : Node) =>
    node.textContent === "Rejoins la communauté des voyageurs";
  const nodeHasText = hasText(element);

  return nodeHasText;
};

expect(
  screen.getByTestId("inscription-page").innerHTML, // Vérifiez le contenu de la page d'inscription
).toMatch(/Rejoins la communauté des voyageurs/);
 });
});
