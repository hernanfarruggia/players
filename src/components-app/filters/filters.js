import React, { Component } from 'react';

import './filters.css';

class Filters extends Component {

    constructor (props) {
        super(props);

        this.state = this.props.filters;
    }

    shouldComponentUpdate (prevProps, prevState) {
        return true;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFilter = () => {
        this.props.handleFilter(this.state);
    }

    handleClear = () => {
        this.props.handleClear();
    }

    render() {
        return (
            <div className="filters">
                <input
                    type="text"
                    name="name" 
                    onChange={ this.handleChange }
                    value={ this.state.name } />
    
                <select
                    name="position"
                    onChange={ this.handleChange }>
                    <option value="">Position</option>
                    { this.props.positions.map((position, key) => (<option value={ position.toLowerCase() } key={ key }>{ position }</option>)) }
                </select>
    
                <input
                    type="number"
                    name="age"
                    onChange={ this.handleChange }
                    value={ this.state.age } />
                
                <button onClick={ this.handleFilter }>Search</button>
                <button onClick={ this.handleClear }>Clear</button>
            </div>
        );
    }
}

export default Filters;