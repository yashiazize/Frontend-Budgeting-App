import "./App.css";
import Index from "./Pages/Index";
import New from "./Pages/New"
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "./utl/apiURL";

const API = apiURL();

const App = () => {
  const [ transactions, setTransactions ] = useState([]);

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.get(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data])
    } catch (error) {
      console.log(error)
    }
}

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
      debugger
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Index transactions={transactions} />
        </Route>
        <Route path="/transactions/new">
        <New addTransaction={addTransaction} />
      </Route>
      </Switch>
    </main>
  );
};

export default App;