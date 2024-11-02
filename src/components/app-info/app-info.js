import './app-info.css';


const AppInfo = (props) => {
    const {vsePid, schetEbl} = props
    return (
        <div className="app-info">
            <h1>Учёт всех сотрудников</h1>
            <h2>количество сотрудников  {vsePid()}</h2>
            <h2>количество сотрудников на повышение: {schetEbl()}</h2>
            
        </div>
    )
};


export default AppInfo;