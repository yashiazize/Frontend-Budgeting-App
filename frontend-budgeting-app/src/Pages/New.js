import NewForm from "../Components/NewForm";

const New = ({ addTransaction }) => {
  return (
    <section>
      <h2> Add a new item</h2>
      <NewForm addTransaction={addTransaction} />
    </section>
  );
};

export default New;
