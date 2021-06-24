import "./App.css";
import NavBar from "./Components/NavBar";

import Index from "./Pages/Index";
import New from "./Pages/New";
import Display from "./Pages/Display";
import Edit from "./Pages/Edit";

import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import { apiURL } from "./utl/apiURL";

const API = apiURL();

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (newTransaction) => {
    let res;
    try {
      res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const editTransaction = async (editedTransaction, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, editedTransaction);
      const newTransactions = [...transactions];
      newTransactions[index] = editedTransaction;
      setTransactions(editedTransaction);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const deletedState = [...transactions];
      deletedState = transactions.splice(index, 1);
      setTransactions(deletedState);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const fetchLogs = async () => {
      let res;
      try {
        res = await axios.get(`${API}/transactions`);
        setTransactions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchLogs();
  }, [transactions]);

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
        <Route path="/transactions/:index/edit">
          <Edit editTransaction={editTransaction} />
        </Route>
        <Route exact path="/transactions/:index">
          <Display deleteTransaction={deleteTransaction} />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
