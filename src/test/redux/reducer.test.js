import reducer from '../../redux/reducer';
import {
    CLEAR,
    FILTER,
    GET_PLAYERS_FAILURE,
    GET_PLAYERS_SUCCESS,
    LOADING_START,
    LOADING_STOP
} from "../../redux/actions";

describe('Reducer', () => {

    describe('Loading', () => {

        it('should set loading as true', () => {
            const result = reducer(null, { type: LOADING_START });
            expect(result.loading).toBe(true);
        });
    
        it('should set loading as false', () => {
            const result = reducer({ loading: true }, { type: LOADING_STOP });
            expect(result.loading).toBe(false);
        });
    });

    describe('Players', () => {

        it('should set players, filtered players and positions', () => {
            const players = [
                    {
                        name: 'name1',
                        position: 'position1'
                    },
                    {
                        name: 'name2',
                        position: 'position2'
                    },
                    {
                        name: 'name3',
                        position: 'position3'
                    }
                ],
                result = reducer(null, { type: GET_PLAYERS_SUCCESS, players });
                expect(result.players).toEqual(players);
                expect(result.filteredPlayers).toEqual(players);
                expect(result.positions).toEqual(['position1', 'position2', 'position3']);
        });
    
        it('should fail to set players and set error', () => {
            const result = reducer(null, { type: GET_PLAYERS_FAILURE, error: 'error message' });
            expect(result.error).toEqual('error message');
        });
    });


    describe('Filters', () => {

        let initialState;

        beforeEach(() => {
            initialState = {
                players: [
                    {
                        name: 'name1',
                        position: 'position1',
                        age: 1
                    },
                    {
                        name: 'name2',
                        position: 'position2',
                        age: 2
                    },
                    {
                        name: 'name3',
                        position: 'position3',
                        age: 3
                    }
                ]
            };
        });

        it('should clear all filters', () => {
            initialState = {
                players: 'initial players',
                filters: 'initial filters'
            }
            const result = reducer(initialState, { type: CLEAR });
            expect(result.filteredPlayers).toEqual('initial players');
            expect(result.filters).toEqual({
                name: '',
                position: '',
                age: ''
            });
        });

        it('should filter players by name', () => {
            const filters = {
                    name: 'name2',
                    position: '',
                    age: ''
                },
                result = reducer(initialState, { type: FILTER, filters });

            expect(result.filteredPlayers).toEqual([
                {
                    name: 'name2',
                    position: 'position2',
                    age: 2
                }
            ]);
            expect(result.filters).toEqual({
                name: 'name2',
                position: '',
                age: ''
            });
        });

        it('should filter players by position', () => {
            const filters = {
                    name: '',
                    position: 'position3',
                    age: ''
                },
                result = reducer(initialState, { type: FILTER, filters });

            expect(result.filteredPlayers).toEqual([
                {
                    name: 'name3',
                    position: 'position3',
                    age: 3
                }
            ]);
            expect(result.filters).toEqual({
                name: null,
                position: 'position3',
                age: ''
            });
        });

        it('should filter players by age', () => {
            const filters = {
                    name: '',
                    position: '',
                    age: '1'
                },
                result = reducer(initialState, { type: FILTER, filters });

            expect(result.filteredPlayers).toEqual([
                {
                    name: 'name1',
                    position: 'position1',
                    age: 1
                }
            ]);
            expect(result.filters).toEqual({
                name: null,
                position: '',
                age: '1'
            });
        });
    });

});