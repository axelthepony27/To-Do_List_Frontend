import "bootstrap/dist/css/bootstrap.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import "./App.css";
import ToDoCrud from "./components/ToDoCrud";

function App() {
  const [todos, setToDos] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await api.get("");
    setToDos(result.data);
  }

  return (
      <div>
        <h1 className="text-center">List Of To-Dos</h1>
        <ToDoCrud load={load} todos={todos} />
      </div>
  );
}

export default App;
