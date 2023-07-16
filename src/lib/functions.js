export function checkPasswordFormat(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  return regex.test(password);
}

export function checkEmailFormat(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function checkNameFormat(username) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(username);
}

export function sanitizeInput(input) {
  return input.replace(/[^a-zA-Z0-9]/g, "");
}

// Fonction unique pour gérer les données avant requête au backend
export function checkAndSanitizeInput(password, email, username) {
  if (!username || !email || !password) {
    alert("Veuillez remplir tous les champs");
    return false;
  }
  if (!checkEmailFormat(email)) {
    alert("Veuillez entrer un email valide");
    return false;
  }
  if (!checkNameFormat(username)) {
    alert("Veuillez entrer un nom d'utilisateur valide");
    return false;
  }
  if (!checkPasswordFormat(password)) {
    alert(
      "Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule et un chiffre"
    );
    return false;
  }
  // Sécurité : préparer les données à envoyer au backend
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedUsername = sanitizeInput(username);
  return { sanitizedEmail, sanitizedUsername };
}
