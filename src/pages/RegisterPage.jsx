import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/userService';
import '../styles/app.scss'

export default function RegisterPage() {
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username } = e.target.elements;

    register(email.value, password.value, username.value)
      .then((response) => {
        console.log("1",response);
        Navigate('/');
      })
      .catch((error) => {
        setErrorMessage("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.")
    });
  };
  return (
    <section>
        <div className="container">
            <div className="text-content">
                <p>
                    En attendant de pouvoir profiter de l'application sur votre téléphone, vous pouvez vous inscrire ici.
                </p>

            <div className="form-content">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Pseudo</label>
                    <input type="text" id="username" name="pseudonyme" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="mot de passe" />
                    <button className='btn' type="submit">S'enregistrer</button>
                </form>
            </div>
            </div>
        </div>
    </section>
  );
}