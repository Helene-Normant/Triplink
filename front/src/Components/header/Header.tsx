import React, { useState } from "react";
import HeaderMobile from "./header-mobile/HeaderMobile";
import HeaderDesktop from "./header-desktop/HeaderDesktop";
import useIsMobile from "../../Hooks/useIsMobile";


const Header = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? <HeaderDesktop /> : <HeaderMobile />}
    </>
  );
}

export default Header;
