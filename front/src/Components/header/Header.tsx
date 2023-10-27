import React, { useState, useEffect } from "react";
import HeaderMobile from "./header-mobile/HeaderMobile";
import HeaderDesktop from "./header-desktop/HeaderDesktop";
import useIsMobile from "../../Hooks/useIsMobile";


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
