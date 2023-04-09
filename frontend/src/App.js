import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layouts/BasicLayouts";
import HomePage from "./pages/HomePage";
import ItinerairesPage from "./pages/ItinerairesPage";
import Profil from "./pages/Profil";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

import { Provider } from "react-redux";
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { appMiddleware } from "./middlewares/app";
import { apiMiddleware } from "./middlewares/core";

const store = configureStore({
  reducer,
  middleware: [appMiddleware, apiMiddleware],
});

function App() {
  const isAuthUser = !!localStorage.getItem("isAuthUser");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout title="Bienvenue sur Epic Road Trip">
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/itineraires"
            element={
              <Layout title="Itinéraires">
                <ItinerairesPage />
              </Layout>
            }
          />

          <Route
            path="/register"
            element={
              isAuthUser ? (
                <Navigate to="/profil" replace />
              ) : (
                <Layout title="S'inscrire">
                  <RegisterPage />
                </Layout>
              )
            }
          />

          <Route
            path="/login"
            element={
              isAuthUser ? (
                <Navigate to="/profil" replace />
              ) : (
                <Layout title="S'identifier">
                  <LoginPage />
                </Layout>
              )
            }
          />

          <Route
            path="/profil"
            element={
              isAuthUser ? (
                isAdmin ? (
                  <Navigate to="/admin" />
                ) : (
                  <Layout title="Profil">
                    <Profil />
                  </Layout>
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/admin"
            element={
              isAuthUser ? (
                isAdmin ? (
                  <Layout title="Administrateur">
                    <AdminPage />
                  </Layout>
                ) : (
                  <Navigate to="/profil" />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
