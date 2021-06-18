import axios from "axios";
import { useState, useEffect } from "react";
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
    <section>
      <p>{transaction.from}</p>
      <p>{transaction.date}</p>
      <p>{transaction.name}</p>
      <p>{transaction.amount}</p>
      <div>
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
