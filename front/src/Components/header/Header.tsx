import React, { useState } from "react";
import HeaderMobile from "./header-mobile/HeaderMobile";
import HeaderDesktop from "./header-desktop/HeaderDesktop";
import useIsMobile from "../../Hooks/useIsMobile";
import { useAuth } from "../../AuthContext";


const Header = () => {
  const isMobile = useIsMobile();
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  // const userAuthentication = () => {
  //   setIsUserLoggedIn(prevState => !prevState);
  // }
  const { isUserLoggedIn } = useAuth();

  return (
    <>
      {!isMobile ? <HeaderDesktop  isUserLoggedIn={isUserLoggedIn}  /> : <HeaderMobile />}
    </>
  );
}

export default Header;
