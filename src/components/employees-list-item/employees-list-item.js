import './employees-list-item.css';


const EmployeesListItem = (props) => {


    
    const {name, salary, onDelit, onToglLike, onToglRise, cam, like} = props

    return (
        <li className={"list-group-item d-flex justify-content-between " + (cam ? 'increase ' : '') + (like ? 'like': '')}>
            <span className="list-group-item-label"
                onClick={onToglLike}>{name}</span>
            <input type="text" className='list-group-item-input' defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToglRise}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelit}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    
    
}

export default EmployeesListItem; 
