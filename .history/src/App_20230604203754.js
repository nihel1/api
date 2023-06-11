import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [list, setlist] = useState(null);
  console.log(list);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((list) => setlist(list));
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
