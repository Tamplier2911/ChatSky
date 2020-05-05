import "./App.scss";
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

function App({ checkUserSessionStart, user }) {
  useEffect(() => {
    checkUserSessionStart();
  }, [checkUserSessionStart]);
  return (
    <div className="container">
      <Header />
      <Sidenav />
      <Modal />
      <main className="main">
        <Switch>
          <Route
            exact
            path="/auth"
            render={() => (user ? <Redirect to="/" /> : <AuthPage />)}
          />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/channels" component={ChannelsPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSessionStart })(App);
