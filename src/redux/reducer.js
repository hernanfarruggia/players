import { GET_PLAYERS_SUCCESS, FILTER } from "./actions";

const initialState = {
    players: [],
    filteredPlayers: [],
    filters: {
        name: '',
        position: '',
        age: ''
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLAYERS_SUCCESS:
            return Object.assign({}, state, {
                players: action.players,
                filteredPlayers: action.players
            });

        case FILTER:
            return Object.assign({}, state, {
                filteredPlayers: state.players.filter(player => {
                    return player.name.toLowerCase().includes(action.filters.name.toLowerCase()) &&
                        player.position.toLowerCase().includes(action.filters.position) &&
                        player.age === action.filters.age;
                }),
                filters: action.filters
            });

        default:
            return state;
    }
}

export default reducer;