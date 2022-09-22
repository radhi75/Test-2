import "./App.css";

import Sidebar from "./Components/Sidebar";

import Navigation from "./Components/Navigation";
import Home from "./Components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import { moviesData } from "./assets/Data";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Sidebar>
        <Routes>
          <Route path="/home" element={<Home moviesData={moviesData} />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
