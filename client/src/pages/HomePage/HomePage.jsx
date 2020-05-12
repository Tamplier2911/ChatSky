// import "./HomePage.scss";
import React from "react";

// components
import Logo from "../../components/Logo/Logo";
import LogoPlane from "../../components/LogoPlane/LogoPlane";

// js render css
import { HomePageContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Logo size="home" />
      <LogoPlane />
    </HomePageContainer>
  );
};

export default HomePage;
