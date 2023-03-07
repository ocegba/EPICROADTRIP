import React from 'react';
import voyageursImg from "../media/voyageurs.jpg";

function RegisterPage() {
  return (
    <div>
      <h1>Welcome back!</h1>
      <h3>Entrez vos informations afin de vous inscrire</h3>

      <div>
      <label id="username-label">Username</label>
        <input aria-labelledby="username-label" />

        <label id="email-label">Email</label>
        <input aria-labelledby="email-label" />

        <label id="password-label">Mot de passe</label>
        <input aria-labelledby="password-label" />

        <button type="submit">S'inscrire</button>
        <p>Vous êtes déjà inscrit ? <a href="/inscription">Identifiez-vous ici</a></p>
      </div>
      <div>
        <img src={voyageursImg} alt="Voyageurs Sur Une Colline" />
      </div>
    </div>
  );
}

export default RegisterPage;