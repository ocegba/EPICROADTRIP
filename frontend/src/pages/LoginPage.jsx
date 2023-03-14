import React from "react";
import voyageursImg from "../media/voyageurs.jpg";
function LoginPage() {
  return (
    <div>
      <h1>Welcome back!</h1>
      <h3>Entrez vos informations afin de vous connecter</h3>

      <div>
        <label id="email-label">Email</label>
        <input aria-labelledby="email-label" />

        <label id="password-label">Mot de passe</label>
        <input aria-labelledby="password-label" />

        <button type="submit">S'identifier</button>
        <p>Vous n’êtes pas inscrit ? <a href="/inscription">Inscrivez-vous ici</a></p>
      </div>
      <div>
        <img src={voyageursImg} alt="Voyageurs Sur Une Colline" />
      </div>
    </div>
  );
}

export default LoginPage;
