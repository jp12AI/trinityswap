import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          Trinityswap is currently beta software. Use at your own risk.
        </div>
      </div>
      <Routes />
      <div className="social-buttons">
        <GitHubButton
          href="https://github.com/jp12AI/trinityswap"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count={true}
          aria-label="Star trinityswap on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
}

export default App;
