// Import des fonctions depuis /lib/functions.js
import { checkAndSanitizeInput } from "../lib/functions.js";

export async function register(email, password, passwordConfirm, username) {
  // Vérifier que les mots de passe correspondent
  if (password !== passwordConfirm) {
    alert("Les mots de passe ne correspondent pas");
    return;
  }
  // Sécurité : préparer les données à envoyer au backend
  const { sanitizedEmail, sanitizedUsername } = checkAndSanitizeInput(
    email,
    username
  );
  try {
    const response = await fetch("https://localhost:5001/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: sanitizedEmail,
        password,
        username: sanitizedUsername,
      }),
    });
    const data = await response.json();
    if (response.status === 201) {
      alert("Utilisateur créé avec succès");
      return data;
    } else {
      throw new Error(`Une erreur est survenue : ${data.message}`);
    }
  } catch (error) {
    console.error(error);
    alert(`Une erreur est survenue : ${error.message}`);
    throw error;
  }
}
