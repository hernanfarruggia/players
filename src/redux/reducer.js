import {
    CLEAR,
    FILTER,
    GET_PLAYERS_SUCCESS,
    LOADING_START,
    LOADING_STOP,
    GET_PLAYERS_FAILURE
} from "./actions";

const initialState = {
    error: false,
    filteredPlayers: [],
    filters: {
        name: '',
        position: '',
        age: ''
    },
    loading: true,
    players: [],
    positions: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOADING_START:
            return {
                ...state,
                loading: true
            };

        case LOADING_STOP:
            return {
                ...state,
                loading: false
            };

        case GET_PLAYERS_SUCCESS:
            // Getting positions and removing duplicates
            let positions = action.players.map(player => player.position);
            positions = positions.filter((item, index) => positions.indexOf(item) === index);

            return {
                ...state,
                error: false,
                filteredPlayers: action.players,
                players: action.players,
                positions
            };

        case GET_PLAYERS_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case CLEAR:
            return {
                ...state,
                error: false,
                filteredPlayers: state.players,
                filters: {
                    name: '',
                    position: '',
                    age: ''
                }
            };

        case FILTER:
            // Avoid false positives by matching empty strings
            action.filters.name = ! action.filters.name ? null : action.filters.name.toLowerCase();

            return {
                ...state,
                error: false,
                filteredPlayers: state.players.filter(player => {

                    return player.name.toLowerCase().includes(action.filters.name) ||
                        player.position.toLowerCase() === action.filters.position ||
                        toString(player.age) === action.filters.age;
                }),
                filters: action.filters
            };

        default:
            return state;
    }
}

export default reducer;