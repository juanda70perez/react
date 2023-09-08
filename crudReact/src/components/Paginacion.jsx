

const Paginacion = ({ prev, next, onPrevious, onNext }) => {
    const Click_Previous = () => {
        onPrevious();
    }
    const Click_Next = () => {
        onNext();
    }

    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {
                    prev ?
                        <li className="page-item">
                            <button className="page-link" onClick={Click_Previous}>Previous</button>
                        </li>
                        : null
                }
                {
                    next ?
                        <li className="page-item">
                            <button className="page-link" onClick={Click_Next}>Next</button>
                        </li>
                        : null
                }

            </ul>
        </nav>
    )
}

export default Paginacion