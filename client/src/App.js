// import "./App.scss";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSessionStart } from "./redux/user/user.actions";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidenav from "./components/Sidenav/Sidenav";
import Modal from "./components/Modal/Modal";

// pages
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import ChannelsPage from "./pages/ChannelsPage/ChannelsPage.jsx";

// js render css
import { AppContainer, AppMain } from "./AppStyles";

function App({ checkUserSessionStart, user }) {
  useEffect(() => {
    checkUserSessionStart();
  }, [checkUserSessionStart]);
  return (
    <AppContainer>
      <Header />
      <Sidenav />
      <Modal />
      <AppMain>
        <Switch>
          <Route
            exact
            path="/auth"
            render={() => (user ? <Redirect to="/" /> : <AuthPage />)}
          />
          <Route
            exact
            path="/chat"
            render={() => (user ? <ChatPage /> : <AuthPage />)}
          />
          <Route
            exact
            path="/channels"
            render={() => (user ? <ChannelsPage /> : <AuthPage />)}
          />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </AppMain>
      <Footer />
    </AppContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSessionStart })(App);
