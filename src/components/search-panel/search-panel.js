import './search-panel.css'

import { Component } from 'react';



class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }


    vodPoisk = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.filtePed(term);
    }
    
    

    render() {
        return (
            <input 
            className='form-control search-input'
            placeholder='найти пидора'
            type="text" 
            value={this.state.term}
            onChange={this.vodPoisk}
            />
        )
    }
}


export default SearchPanel;