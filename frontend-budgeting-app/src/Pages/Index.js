import Transactions from "../Components/Transactions";

const Index = ({ transactions }) => {
  return (
    <section>
      <h2>Bank Account Total </h2>
      <ul>
        <Transactions transactions={transactions} />
      </ul>
    </section>
  );
};

export default Index;
