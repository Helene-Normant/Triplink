import React from "react";
import HeaderMobileLogin from "./header-mobile-states/HeaderMobileLogin";
import HeaderMobileLogout from "./header-mobile-states/HeaderMobileLogout";

type HeaderMobileProps = {
  isUserLoggedIn: boolean;
  checkLocalStorage: boolean;
  logout: () => void;
};

const HeaderMobile = ({ isUserLoggedIn, checkLocalStorage, logout }: HeaderMobileProps) => {

  return (
    isUserLoggedIn ? (
      <HeaderMobileLogout logout={logout} />
    ) : (
      <HeaderMobileLogin />
    )
  );
}

export default HeaderMobile;
