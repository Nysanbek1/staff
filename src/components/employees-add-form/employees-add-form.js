import { useState } from 'react';
import './employees-add-form.css';

const useOnValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onValueChangeName = (e) => {
        setValue(e.target.value);
    }

    const delValue = () => {
        setValue('');
    }

    return { value, onValueChangeName, delValue };
}
const EmployeesAddForm = (props) => {
    const name = useOnValue('')
    const salary = useOnValue('')

    
    

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(name.value, salary.value);
        name.delValue()
        salary.delValue()
    }

    /*onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }*/

  
    return (
        <div className="app-add-form">
            <h3>Добавьте новый анус</h3>
            <form
                className="add-form d-flex"
                onSubmit = {onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="имя"
                    name="name"
                    value={name.value} 
                    onChange={name.onValueChangeName}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="ЗП"
                    name="salary"
                    value={salary.value} 
                    onChange={salary.onValueChangeName}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
    
}

export default EmployeesAddForm;