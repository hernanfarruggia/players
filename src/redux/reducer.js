import { GET_PLAYERS_SUCCESS, FILTER } from "./actions";

const initialState = {
    players: [],
    filteredPlayers: [],
    filters: {
        name: '',
        position: '',
        age: ''
    },
    positions: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_PLAYERS_SUCCESS:
            // Getting positions and removing duplicates
            let positions = action.players.map(player => player.position);
            positions = positions.filter((item, index) => positions.indexOf(item) === index);

            return {
                ...state,
                players: action.players,
                filteredPlayers: action.players,
                positions
            };

        case FILTER:
            // Avoid false positives by matching empty strings
            action.filters.name = ! action.filters.name ? null : action.filters.name.toLowerCase();
            // Avoid comparing string age values
            action.filters.age = parseInt(action.filters.age);

            return {
                ...state,
                filteredPlayers: state.players.filter(player => {

                    return player.name.toLowerCase().includes(action.filters.name) ||
                        player.position.toLowerCase() === action.filters.position ||
                        player.age === action.filters.age;
                }),
                filters: action.filters
            };

        default:
            return state;
    }
}

export default reducer;