
const Transactions = ({transactions}) => {
    return (
        <div>
            {transactions.map((transaction) => {
                return <li> {transaction.date} {transaction.name}  {transaction.amount}</li>
            })}
        </div>
    )
}

export default Transactions;