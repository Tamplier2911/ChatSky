// import "./HomePage.scss";
import React from "react";

// components
import Logo from "../../components/Logo/Logo";

// js render css
import { HomePageContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Logo size="home" />
    </HomePageContainer>
  );
};

export default HomePage;
