import React, { useState, useEffect } from "react";
import HeaderMobile from "./header-mobile/header-mobile";
import useIsMobile from "../../hooks/use-is-mobile";
import HeaderDesktop from "./header-desktop/header-desktop";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [checkLocalStorage, setCheckLocalStorage] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('apiToken');
    if (token) {
      setIsUserLoggedIn(true);
      setCheckLocalStorage(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setCheckLocalStorage(false);
    setIsUserLoggedIn(false);
    console.log(localStorage);
  };

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ?
        <HeaderDesktop
          isUserLoggedIn={isUserLoggedIn}
          checkLocalStorage={checkLocalStorage}
          logout={logout}
        /> :
        <HeaderMobile
          isUserLoggedIn={isUserLoggedIn}
          checkLocalStorage={checkLocalStorage}
          logout={logout}
        />}
    </>
  );
}

export default Header;
