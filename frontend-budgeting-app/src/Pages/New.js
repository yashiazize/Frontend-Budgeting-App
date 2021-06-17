import NewLogForm from "../Components/NewLogForm";

const New = ({ addTransaction }) => {
  return (
    <section>
      <h2> Add a new item</h2>
      <NewLogForm addTransaction={addTransaction} />
    </section>
  );
};

export default New;
