import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item'


const EmployeesList = ({data, onDelit, onToglRise, onToglLike}) => {

    const el = data.map(item => {
        const {id, ...itemProps} = item
        return <EmployeesListItem key={id} {...itemProps}
        onDelit={() => onDelit(id)}
        onToglRise={() => onToglRise(id)}
        onToglLike={() => onToglLike(id)}
        />
    })

    return (
        <ul className="app-list list-group">  
            {el}
        </ul>
    )
}

export default EmployeesList;