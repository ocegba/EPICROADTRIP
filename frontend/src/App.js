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
        <Route exact path="/" element={<BasicLayouts><HomePage /></BasicLayouts>} />
        <Route path="/itineraires" element={<BasicLayouts><ItinerairesPage /></BasicLayouts>} />
        <Route path="/register" element={<BasicLayouts><RegisterPage /></BasicLayouts>}/>
        <Route path="/login" element={<BasicLayouts><LoginPage /></BasicLayouts>}/>

        <Route path="/profil" element={<BasicLayouts><Profil /></BasicLayouts>} />
        <Route path="/admin" element={<BasicLayouts><AdminPage /></BasicLayouts>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
