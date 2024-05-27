import React, { lazy, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import initializeApp from "./app/init";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));

// Initializing different libraries
initializeApp();

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/app/*" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
