import React from 'react';
import { shallow } from 'enzyme';
import Players from './Players';
import Loading from '../loading'

const setup = (props = {}) => {
    return shallow(<Players {...props} />);
}

describe('Players Component', () => {

    it('should render the component and show results', () => {
        const props = {
                isLoading: false,
                filteredPlayers: [
                    {
                        name: 'player1',
                        position: 'position1',
                        nationality: 'nationality1',
                        age: 'age1'
                    },
                    {
                        name: 'player2',
                        position: 'position2',
                        nationality: 'nationality2',
                        age: 'age2'
                    },
                    {
                        name: 'player3',
                        position: 'position3',
                        nationality: 'nationality3',
                        age: 'age3'
                    }
                ]
            },
            Component = setup(props),
            table = Component.find('tr');

        expect(table.length).toBe(4); // 1 for titles, 3 for results
    });

    it('should render a no players found message', () => {
        const props = {
                isLoading: false,
                filteredPlayers: []
            },
            Component = setup(props),
            notFoundMsg = Component.find('.not_found');

        expect(notFoundMsg.length).toBe(1);
        expect(notFoundMsg.text()).toEqual('No players found.');
    });

    it('should render the Loading component if isLoading prop is true', () => {
        const props = {
                isLoading: true,
                filteredPlayers: []
            },
            Component = setup(props);

            expect(Component.find(Loading).length).toBe(1);
    });
});