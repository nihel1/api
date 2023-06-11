import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import Details from "./components/Details";
import axios from "axios";

function App() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log(list);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const list = response.data;
        setList(list);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<UserList users={list} loading={loading} />}
          />
          <Route path="/info/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
