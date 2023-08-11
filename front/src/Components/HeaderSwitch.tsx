import React from "react";
import Header from "./header/Header";
import HeaderLog from "./headerLog/HeaderLog";

const HeaderSwitch = (props) => {
  const {isUserLoggedIn, userAuthentication} = props

  return (
    <>
      {!isUserLoggedIn ? <HeaderLog/> : <Header />}
    </>
  );
}

export default HeaderSwitch;