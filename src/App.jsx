import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Nu am primit nimic încă");

  useEffect(() => {
    console.log("Pornesc cererea...");

    axios
        .get("api/hello")
        .then((response) => {
          console.log("Răspuns primit:", response.data);
          setMessage(response.data);
        })
        .catch((error) => {
          console.error("EROARE:", error);
          setMessage("A apărut o eroare");
        });
  }, []);

  return (
      <div>
        <h1>MyApp</h1>
        <p>{message}</p>
      </div>
  );
}

export default App;