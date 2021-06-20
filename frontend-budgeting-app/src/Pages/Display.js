import Details from "../Components/Details"


const Display = ({deleteTransaction}) => {
    return (
        <div>
            <section>
                <Details deleteTransaction={deleteTransaction}/>
            </section>
        </div>
    )
}

export default Display;