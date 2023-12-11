import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";
import "./App.css"
function App() {
  const auth = useAuth();

  return (
    <>
     <Header />
    <main>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    </>
  );
}

export default App;