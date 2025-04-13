import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Expense from "./pages/Dashboard/Expense";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";

// const Root = () => <div className="text-sm">Home Page</div>;
// const About = () => <div className="text-sm">About Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/income" element={<Income />} />
      </Routes>
    </Router>
  );
};

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <Home /> : <Login />;
};
