
import { useState } from "react";
import Card from "./components/Card";
import Login from "./components/Login";
import { WondersArr } from "./Data";

function App() {
  const [search, setSearch] = useState("");

  const filteredWonders = WondersArr.filter((wonder) =>
    wonder.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-4">
      <Login />

      <h1 className="text-center mb-4">NATURAL WONDERS</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher une merveille naturelle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredWonders.length > 0 ? (
          filteredWonders.map((wonder) => (
            <div className="col" key={wonder.id}>
              <Card
                name={wonder.name}
                desc={wonder.desc}
                image={wonder.image}
                wonder={wonder}
              />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="alert alert-warning text-center">
              Aucune merveille trouvée.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
