import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import ProtectedAuth from "./components/ProtectedAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<ProtectedAuth />}>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route exact path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
