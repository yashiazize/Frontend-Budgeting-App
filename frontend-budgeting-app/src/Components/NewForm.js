import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { apiURL } from "../utl/apiURL";
const API = apiURL();

const NewForm = (props) => {
  const { index } = useParams();
  const [transaction, setTransaction] = useState({
    from: "",
    date: "",
    name: "",
    amount: "",
  });

  const handleChange = (e) => {
    setTransaction({...transaction, [e.target.id]: e.target.value})
  }
  
  const handleNumber = (e) => {
    setTransaction({...transaction, amount: Number(e.target.value)})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {addTransaction, history} = props;
    addTransaction(transaction);
    history.push("/")
  };


  return (
    <section className="newFormContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From:</label>
        <input
          id="from"
          required
          value={transaction.from}
          onChange={handleChange}
          type="text"
          placeholder="From..."
        />
        <label htmlFor="date">Date:</label>
        <input
          required
          id="date"
          value={transaction.date}
          onChange={handleChange}
          type="date"
          placeholder="Date..."
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          onChange={handleChange}
          type="text"
          required
          placeholder="Name..."
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          onChange={handleNumber}
          type="text"
          required
          placeholder="Amount..."
        />
        <br/>
        <input className="newFormButton" type="submit"/>
      </form>
    </section>
  );
};

export default withRouter(NewForm);
