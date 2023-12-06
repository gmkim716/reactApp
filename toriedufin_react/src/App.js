import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import ReactCalendar from "./components/ReactCalendar";
import Welcome from "./components/Welcome";
import Summary from "./components/Summary";
import ReactChart from "./components/ReactChart";

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
        <ReactChart />
        <hr />
      </div>
    </>
  );
}

export default App;
