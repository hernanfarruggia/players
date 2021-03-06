import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    clear,
    filter
} from '../redux/actions';

import './filters.css';

export class Filters extends Component {

    constructor (props) {
        super(props);

        this.state = {
            name: '',
            position: '',
            age: ''
        }
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

    renderPositions () {
        return this.props.positions.map((position, key) => (
            <option 
                key={ key }
                selected={ position.toLowerCase() === this.state.position }
                value={ position.toLowerCase() }>
                { position }
            </option>
        ));
    }

    render () {
        return (
            <div className="filters">
                <input
                    name="name" 
                    onChange={ this.handleChange }
                    type="text"
                    value={ this.state.name } />
    
                <select
                    name="position"
                    onChange={ this.handleChange }>
                    <option value="">Position</option>
                    { this.renderPositions() }
                </select>
    
                <input
                    min="0"
                    name="age"
                    onChange={ this.handleChange }
                    type="number"
                    value={ this.state.age } />
                
                <button name="filterAction" onClick={ this.handleFilter }>Search</button>
                <button name="clearAction" onClick={ this.handleClear }>Clear</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters,
        positions: state.positions
    };
}

const mapDispatchToProps = dispatch => {
    return {
        applyFilters: (filters) => dispatch(filter(filters)),
        clearFilters: (filters) => dispatch(clear())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);