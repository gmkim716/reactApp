import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import User from "./components/User";

function App() {
  const user = {
    id: 1,
    username: "gmkim716",
  };

  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
