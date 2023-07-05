export async function register(email, password, username) {
  try {
    const response = await fetch("http://localhost:5001/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });

    if (!response.ok) {
      throw new Error("Une erreur s'est produite lors de l'inscription.");
    }

    // Gérer la réponse de la BDD (par exemple, renvoyer les données utilisateur)
    const data = await response.json();
    if (response.status === 201) {
      alert("Utilisateur créé avec succès");
      return data;
    } else {
      throw new Error(
        "Une erreur est survenue lors de la création de l'utilisateur."
      );
    }
  } catch (error) {
    // Gérer les erreurs (par exemple, afficher un message d'erreur)
    console.error(error);
    throw error;
  }
}
