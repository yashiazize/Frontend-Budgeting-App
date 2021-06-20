import { useState } from "react";
import { withRouter } from "react-router-dom";

const NewForm = (props) => {
  const [transaction, setTransaction] = useState({
    from: "",
    date: "",
    name: "",
    amount: 0,
  });

  const handleChange = (e) => {
    setTransaction({...transaction, [e.target.id]: e.target.value})
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
          value={transaction.from}
          onChange={handleChange}
          type="text"
          placeholder="From..."
        />
        <label htmlFor="date">Date:</label>
        <input
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
          placeholder="Name..."
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          onChange={handleChange}
          type="number"
          placeholder="Amount..."
        />
        <input className="newFormButton" type="submit"/>
      </form>
    </section>
  );
};

export default withRouter(NewForm);
