import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    clear,
    filter
} from '../../redux/actions';

import './filters.css';

class Filters extends Component {

    constructor (props) {
        super(props);

        this.state = this.props;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFilter = () => {
        this.props.applyFilters(this.state);
    }

    handleClear = () => {
        this.props.clearFilters();

        this.setState({
            name: '',
            position: '',
            age: ''
        });
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

const mapStateToProps = state => {
    return state.filters;
}

const mapDispatchToProps = dispatch => {
    return {
        applyFilters: (filters) => dispatch(filter(filters)),
        clearFilters: (filters) => dispatch(clear())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);