import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayers } from '../redux/actions';

import Filters from '../filters';
import Players from '../players';

import './app.css';

class App extends Component {

    componentDidMount () {
        this.props.getPlayers();
    }

    renderError(error) {
        console.log(error);

        return 'There\'s a connection issue, try reloading the page.';
    }

    renderPlayers() {
        return (
            <div>
                <Filters />
    
                <Players
                    isLoading={ this.props.loading }
                    filteredPlayers={ this.props.filteredPlayers } />
            </div>
        );
    }

    renderContent() {
        return this.props.error ?
            this.renderError(this.props.error) :
            this.renderPlayers();
    }

    render () {

        return (
            <div className="wrapper">
    
                <header className="header">
                    Football Players Finder
                </header>
    
                <div className="content">
                    { this.renderContent() }
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        error: state.error,
        loading: state.loading,
        filteredPlayers: state.filteredPlayers
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPlayers: () => dispatch(getPlayers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
