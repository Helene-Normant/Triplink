import React from "react";
import "./header-desktop.css";
import HeaderLogout from "./header-desktop-states/header-logout";
import HeaderLogin from "./header-desktop-states/header-login";

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
      <HeaderLogin />
    )
  );
}

export default HeaderDesktop;
