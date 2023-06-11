import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(list);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((list) => setList(list))
      .then(setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <UserList users={list} />
    </div>
  );
}

export default App;
