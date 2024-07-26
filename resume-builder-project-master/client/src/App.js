import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Body from "./components/Body/Body";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />{" "}
            <Route path="/home" element={<Body />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
