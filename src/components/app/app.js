import './app.css';
import { useState } from 'react';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

const App = (props) => {

    const [data, setdata] = useState([
        {name: 'Nos', salary: 1000, cam: true, like: true, id: 1},
        {name: 'Andor', salary: 1500, cam: false, like: false, id: 2},
        {name: 'Rai', salary: 1200, cam: true, like: false, id: 3},
    ])
    const [term, setterm] = useState('')
    const [fill, setfill] = useState(true)
    const [apdet, setapdet] = useState(false)
    const [samSoch, setsamSoch] = useState(false)
    const [maxId, setmaxId] = useState(4)


    const onDelit = (id) => {
        setdata(data => data.filter(it => it.id !== id))
    }

    const addItem = (name, salary) => {
        const newItem = {
            name, 
            salary: salary,
            cam: false,
            like: false,
            id: maxId
        }

        setdata(data => [...data, newItem])
        setmaxId(maxId => maxId + 1)
        
    }

    const onToglLike = (id) => {
        setdata(data => () => {
            const index = data.findIndex(el => el.id === id);
            const old = data[index]
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)] 
            return {
                newArr
            }
        }) 
    }

    const onToglRise = (id) => {
        setdata(data => () => {
            data.map(mem => {
                if (mem.id === id) {
                    return { ...mem, cam: !mem.cam };
                }
                return mem;
            })
        })
    }


    const vsePid = () => {
        return data.length;
    };

    const schetEbl = () => {
        let schet = 0;
        data.forEach((it) => {
            if (it.cam){
                ++schet;
            }
            
        });
        return schet;
    }


    const filtBtn = (item, fill, apdet, samSoch) => {
        if (fill) {
            return item;
        }
    
        if (apdet) {
            return item.filter(i => i.like);
        }
        
        if (samSoch) {
            return item.filter(i => i.salary > 1000);
        }
    
        return item;
    };
    

    const poiscPid = (item, term,) => {


        item = filtBtn(data, fill, apdet, samSoch)


        if (term.length === 0) {
            return item;
        } 
        if (term.length > 0){
            return item.filter(item => {
                return item.name.indexOf(term) > -1;
            });
        }
        
        

    }

    const filtePed = (term) => {
        setterm(term)
    }

    const vsePed = (fill, apdet, samSoch) => {

        setfill(fill)
        setapdet(apdet)
        setsamSoch(samSoch)
    }
    
    

    

    
    return (
        <div className="app">
            <AppInfo
            vsePid={vsePid}
            schetEbl={schetEbl}
            />
            <div className="search-panel">
                <SearchPanel
                filtePed={filtePed}
                />
                <AppFilter
                vsePed={vsePed}
                />
            
            </div>
            <EmployeesList 
            data={poiscPid(data, term)}
            onDelit={onDelit}
            onToglLike={onToglLike}
            onToglRise={onToglRise}
            />
            <EmployeesAddForm onAdd={addItem}/>
        </div>
    )
    
}


export default App;