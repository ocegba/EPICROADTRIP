import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BasicLayouts from './components/Layouts/BasicLayouts'

import HomePage from './pages/HomePage';
import ItinerairesPage from './pages/ItinerairesPage';
import Profil from './pages/Profil';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BasicLayouts title="Bienvenue sur Epic Road Trip"><HomePage /></BasicLayouts>} />
        <Route exact path="/itineraires" element={<BasicLayouts title="Itinéraires"><ItinerairesPage /></BasicLayouts>} />
        <Route exact path="/register" element={<BasicLayouts title="S'inscrire"><RegisterPage /></BasicLayouts>}/>
        <Route exact path="/login" element={<BasicLayouts title="S'identifier"><LoginPage /></BasicLayouts>}/>

        <Route exact path="/profil" element={<BasicLayouts title="Profil"><Profil /></BasicLayouts>} />
        <Route exact path="/admin" element={<BasicLayouts title="Administrateur"><AdminPage /></BasicLayouts>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
