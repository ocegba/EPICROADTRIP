import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layouts/BasicLayouts";

import HomePage from "./pages/HomePage";
import ItinerairesPage from "./pages/ItinerairesPage";
import Profil from "./pages/Profil";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

import AuthRoute from "./components/AuthRoute.js";

import { Provider } from "react-redux";
import { applyMiddleware } from "redux";

import reducer from "./reducer";
import { createStore } from "redux";

import { appMiddleware } from "./middlewares/app";
import { apiMiddleware } from "./middlewares/core";

const createStoreWithMiddleware = applyMiddleware(
  appMiddleware,
  apiMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute path="/">
                <Layout title="Bienvenue sur Epic Road Trip">
                  <HomePage />
                </Layout>
              </AuthRoute>
            }
          />

          <Route
            path="/itineraires"
            element={
              <AuthRoute path="/itineraires">
                <Layout title="Itinéraires">
                  <ItinerairesPage />
                </Layout>
              </AuthRoute>
            }
          />

          <Route
            path="/register"
            element={
              <AuthRoute path="/register" type="guest">
                <Layout title="S'inscrire">
                  <RegisterPage />
                </Layout>
              </AuthRoute>
            }
          />

          <Route
            path="/login"
            element={
              <AuthRoute path="/login" type="guest">
                <Layout title="S'identifier">
                  <LoginPage />
                </Layout>
              </AuthRoute>
            }
          />

          <Route
            path="/profil"
            element={
              <AuthRoute path="/profil" type="private">
                <Layout title="Profil">
                  <Profil />
                </Layout>
              </AuthRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AuthRoute path="/admin" type="private">
                <Layout title="Administrateur">
                  <AdminPage />
                </Layout>
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
