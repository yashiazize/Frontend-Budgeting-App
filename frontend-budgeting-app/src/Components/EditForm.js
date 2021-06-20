import { useState, useEffect } from "react";
import { useHistory, useParams, Link} from "react-router-dom";
import axios from "axios"
import { apiURL } from "../utl/apiURL";
const API = apiURL();

const EditForm = (props) => {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    from: "",
    date: "",
    name: "",
    amount: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleNumber = (e) => {
    setTransaction({...transaction, amount: Number(e.target.value)})
  }

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      fetchTransactions()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.editTransaction(transaction, index);
    history.push(`/transactions/${index}`)
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
          onChange={handleNumber}
          type="text"
          placeholder="Amount..."
        />
         <br/>
        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}> <button>Nevermind</button></Link>
    </section>
  );
};

export default EditForm;
