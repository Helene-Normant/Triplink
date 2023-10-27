import React from "react";
import "./headerDesktop.css";
import HeaderLogout from "./header-desktop-states/HeaderLogout";
import HeaderLogon from "./header-desktop-states/HeaderLogon";

type HeaderProps = {
  isUserLoggedIn: boolean;
  checkLocalStorage: boolean;
  logout: () => void;
};

const HeaderDesktop = ({ isUserLoggedIn, checkLocalStorage, logout }: HeaderProps) => {

  return (
    isUserLoggedIn ? (
      <HeaderLogout logout={logout} />
    ) : (
      <HeaderLogon />
    )
  );
}

export default HeaderDesktop;
