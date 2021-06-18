import "../App.css"

const Transactions = ({transactions}) => {
    return (
        <div className = "transactionsComp">
            {transactions.map((transaction, index) => {
                return <li key={index}> {transaction.date} <a href={`/transactions/${index}`}>{transaction.name}</a>  {transaction.amount}</li>
            })}
        </div>
    )
}

export default Transactions;