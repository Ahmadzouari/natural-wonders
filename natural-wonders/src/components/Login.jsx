
import { useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setIsLogged(true);

      Swal.fire({
        title: "Succès",
        text: "Connexion réussie !",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Erreur",
        text: "Nom d'utilisateur ou mot de passe incorrect !",
        icon: "error",
      });
    }
  };

  if (isLogged) {
    return (
      <div className="alert alert-success text-center">
        <h3>Bienvenue, {username} !</h3>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card mx-auto p-4" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Connexion</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Nom d'utilisateur</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
