// import "./App.scss";
import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSessionStart } from "./redux/user/user.actions";

// global styles
import { GlobalStyle } from "./indexStyles";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidenav from "./components/Sidenav/Sidenav";
import Modal from "./components/Modal/Modal";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

// pages
// import HomePage from "./pages/HomePage/HomePage";
// import AuthPage from "./pages/AuthPage/AuthPage";
// import ChatPage from "./pages/ChatPage/ChatPage";
// import ChannelsPage from "./pages/ChannelsPage/ChannelsPage.jsx";

// js render css
import { AppContainer, AppMain } from "./AppStyles";

// lazzy load
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const ChatPage = lazy(() => import("./pages/ChatPage/ChatPage"));
const ChannelsPage = lazy(() =>
  import("./pages/ChannelsPage/ChannelsPage.jsx")
);

function App({ checkUserSessionStart, user }) {
  useEffect(() => {
    checkUserSessionStart();
  }, [checkUserSessionStart]);
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Sidenav />
      <Modal />
      <AppMain>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </ErrorBoundary>
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
