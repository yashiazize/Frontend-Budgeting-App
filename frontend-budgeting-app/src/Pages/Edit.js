import EditForm from "../Components/EditForm"

const Edit = ({editTransaction}) => {
    return (
        <section>
            <h2>Edit Transaction</h2>
            <EditForm editTransaction={editTransaction}/>
        </section>
    )
}

export default Edit;