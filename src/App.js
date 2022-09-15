import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPages";
import Toolbar from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLoginThunk } from "./store/auth/actions";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapLoginThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <Toolbar />

      <Routes>
        {/* more pages to be added here later */}
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
