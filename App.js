import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <RecipeList /> : <Navigate to="/login" />} />
        <Route path="/add" element={user ? <AddRecipe /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
