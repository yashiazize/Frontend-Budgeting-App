import "../App.css"
import { Link } from "react-router-dom"

const Transactions = ({transactions}) => {
    return (
        <div className = "transactionsComp">
            {transactions.map((transaction, index) => {
                return <li key={index}> {transaction.date} <Link to={`/transactions/${index}`}>{transaction.name}</Link>  {transaction.amount}</li>
            })}
        </div>
    )
}

export default Transactions;