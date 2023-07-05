import React from 'react'

export default function LoginPage() {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Se connecter</button>
    </form>
  );
}