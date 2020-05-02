import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// pages
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
