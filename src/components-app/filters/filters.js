import React from 'react';
import { connect } from 'react-redux';

import { filter } from '../../redux/actions';

import './filters.css';

class Filters extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.filters;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFilter = () => {
        this.props.applyFilter(this.state);
    }

    render () {
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
                    <option selected>Position</option>
                </select>

                <input
                    type="number"
                    name="age"
                    onChange={ this.handleChange }
                    value={ this.state.age } />
                
                <button onClick={this.handleFilter}>Search</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
}

const mapDispatchToProps = dispatch => {
    return {
        applyFilter: (filters) => dispatch(filter(filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);