import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css"
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../utl/apiURL";
const API = apiURL();

const Details = ({deleteTransaction}) => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    deleteTransaction(index)
    history.push("/")
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <section className="detailsContainer">
      <h3>Transaction Details</h3>
      <div className="budgetCard">
      <p>From: {transaction.from}</p>
      <p>Date: {transaction.date}</p>
      <p>Name: {transaction.name}</p>
      <p>Amount: ${transaction.amount}</p>
      </div>
      <div className="detailButtons">
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
};

export default withRouter(Details);
