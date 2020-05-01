import "./App.scss";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="container">
      <header style={{ gridColumn: "full-start / full-end" }}>header</header>
      <main style={{ gridColumn: "center-start / center-end" }}>
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <div>
          <Link to="/">Home Page</Link>
          <Link to="/auth">Register Page</Link>
        </div>
      </main>
      <footer style={{ gridColumn: "full-start / full-end" }}>footer</footer>
    </div>
  );
}

export default App;
