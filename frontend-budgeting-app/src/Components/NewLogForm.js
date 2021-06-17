import { useState } from "react";

const NewLogForm = (props) => {
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
  };

  return (
    <section>
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
          type="text"
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
          type="text"
          placeholder="Amount..."
        />
        <input type="submit"/>
      </form>
    </section>
  );
};

export default NewLogForm;
