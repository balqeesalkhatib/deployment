import React from "react";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import History from "./components/History";
import Notfound from "./components/Notfound";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/History" element={<History />}></Route>

        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
