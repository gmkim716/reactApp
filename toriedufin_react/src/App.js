import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import ReactCalendar from "./components/ReactCalendar";
import ReactGraph from "./components/ReactGraph";
import Welcome from "./components/Welcome";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <div>
        <Welcome />
        <hr />
        <Summary />
        <hr />
        <ReactCalendar />
        <hr />
        <ReactGraph />
        <hr />
      </div>
    </>
  );
}

export default App;
