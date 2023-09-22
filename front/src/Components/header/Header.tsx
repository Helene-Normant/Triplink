import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import HeaderMobile from "./header-mobile/HeaderMobile";
import HeaderDesktop from "./header-desktop/HeaderDesktop";
import useIsMobile from "../../Hooks/useIsMobile";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [checkLocalStorage, setCheckLocalStorage] = useState(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext?.currentUser) {
      setIsUserLoggedIn(true);
      setCheckLocalStorage(true);
    }
  }, [userContext]);

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
