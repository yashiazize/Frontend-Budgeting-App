import Transactions from "../Components/Transactions";
import "../App.css"

const Index = ({ transactions}) => {
  const totalTransactions = () => {
    let sum = 0;
    transactions.forEach((transaction) => {
      sum += transaction.amount;
    });
    return sum;
  };

  const total = totalTransactions();

  return (
    <section className="indexContainer">
      <h2>Bank Account Total: ${total}</h2>
      <ul>
        <Transactions transactions={transactions} />
      </ul>
    </section>
  );
};

export default Index;
